from flask import Flask, request
from flask_cors import CORS  # Import Flask-CORS
from main import *

app = Flask(__name__)
CORS(app, origins="http://localhost:3000")  # Enable CORS for all endpoints and allow requests from http://localhost:3000

@app.route('/get_creator')
def hello_world():
    return get_grant_creator().addres

@app.route('/get_receiver')
def grant_receiver():
    return get_grant_receiver().address

@app.route('/get_receiver_2')
def grant_receive_2():
    return get_grant_receiver_2().address

@app.route('/get_contractor_1')
def contractor_1():
    return get_contractor_1().address

@app.route('/get_contractor_2')
def contractor_2():
    return get_contractor_2().address

@app.route('/get_contractor_3')
def contractor_3():
    return get_contractor_3().address

@app.route('/get_contractor_4')
def contractor_4():
    return get_contractor_4().address

@app.route('/create_grant', methods=['POST'])
def create_grant():
    data = request.get_json()  # Parse JSON data from the request
    recipients = data.get('recipients', [])  # Get a list of recipients from JSON
    contractors = data.get('contractors', [])  # Get a list of contractors from JSON
    value = data.get('value', 0)  # Get the common value from JSON

    recipient_wallets = []
    contractor_wallets = []
    for recipient in recipients:
        recipient_wallets.append(wallets[recipient])
    for contractor in contractors:
        contractor_wallets.append(wallets[contractor])
    grant_creator = get_grant_creator()
    # value must be specified per recipient
    for recipient in recipient_wallets:
        issue_grant(grant_creator, recipient, value)
        # set up trustlines with contractors:
    for contractor in contractor_wallets:
        setup_trustline(grant_creator, contractor)
    return

@app.route('/send_tusd', methods=['POST'])
def send_tusd():
    try:

        data = request.get_json()  # Parse JSON data from the request
        sender = data.get('sender', "")  # Get a list of recipients from JSON
        receiver = data.get('receiver', "")  # Get a list of contractors from JSON
        amount = data.get('amount', 0)  # Get the common value from JSON

        response = send_tusd_transaction(sender, receiver, amount)
        print("Transaction successful!")
        print(response)
    except xrpl.transaction.XRPLReliableSubmissionException as e:
        print(f"Transaction failed: {e}")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")


if __name__ == '__main__':
    app.run()
