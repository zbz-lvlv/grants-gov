from dotenv import load_dotenv
import os
from xrpl.wallet import Wallet
import xrpl

load_dotenv()

testnet_url = os.getenv("testnet_url")
client = xrpl.clients.JsonRpcClient(testnet_url)
currency_code = os.getenv("currency_code")

from xrpl.wallet import Wallet

def get_grant_creator():
    return Wallet.from_seed(seed=os.getenv("grant_creator_seed"))

def get_grant_receiver():
    return Wallet.from_seed(seed=os.getenv("grant_receiver_seed"))

def get_grant_receiver_2():
    return Wallet.from_seed(seed=os.getenv("grant_receiver_2_seed"))

def get_contractor_1():
    return Wallet.from_seed(seed=os.getenv("contractor_1_seed"))

def get_contractor_2():
    return Wallet.from_seed(seed=os.getenv("contractor_2_seed"))

def get_contractor_3():
    return Wallet.from_seed(seed=os.getenv("contractor_3_seed"))

def get_contractor_4():
    return Wallet.from_seed(seed=os.getenv("contractor_4_seed"))

def issue_grant(grant_creator, grant_receiver, value):

    trust_set_tx = xrpl.models.transactions.TrustSet(
        account=grant_receiver.address,
        limit_amount=xrpl.models.amounts.issued_currency_amount.IssuedCurrencyAmount(
            currency=currency_code,
            issuer=grant_creator.address,
            value="10000000000",  # Large limit, arbitrarily chosen
        )
    )
    print("Creating trust line from hot address to issuer...")
    response = xrpl.transaction.submit_and_wait(trust_set_tx, client, grant_receiver)
    print(response)

    send_token_tx = xrpl.models.transactions.Payment(
        account=grant_creator.address,
        destination=grant_receiver.address,
        amount=xrpl.models.amounts.issued_currency_amount.IssuedCurrencyAmount(
            currency=currency_code,
            issuer=grant_creator.address,
            value=str(value)
        )
    )
    print(f"Sending {value} {currency_code} to {grant_receiver.address}...")
    response = xrpl.transaction.submit_and_wait(send_token_tx, client, grant_creator)
    print(response)

def setup_trustline(sender, receiver):
    trust_set_tx = xrpl.models.transactions.TrustSet(
        account=receiver.address,
        limit_amount=xrpl.models.amounts.issued_currency_amount.IssuedCurrencyAmount(
            currency=currency_code,
            issuer=sender.address,
            value="10000000000",  # Large limit, arbitrarily chosen
        ),
        flags=262144
    )
    print("Creating trust line from hot address to issuer...")
    response = xrpl.transaction.submit_and_wait(trust_set_tx, client, receiver)
    print(response)

def send_tusd_transaction(sender, receiver, amount):
    send_token_tx = xrpl.models.transactions.Payment(
        account=sender.address,
        destination=receiver.address,
        amount=xrpl.models.amounts.issued_currency_amount.IssuedCurrencyAmount(
            currency=currency_code,
            issuer=sender.address,
            value=str(amount)
        )
    )
    print(f"Sending {amount} {currency_code} to {receiver.address}...")
    response = xrpl.transaction.submit_and_wait(send_token_tx, client, sender)
    print(response)
    return response

wallets = {}
wallets[str(get_contractor_1().address)] = get_contractor_1()
wallets[str(get_contractor_2().address)] = get_contractor_2()
wallets[str(get_contractor_3().address)] = get_contractor_3()
wallets[str(get_contractor_4().address)] = get_contractor_4()
wallets[str(get_grant_receiver().address)] = get_grant_receiver()
wallets[str(get_grant_receiver_2().address)] = get_grant_receiver_2()
wallets[str(get_grant_creator().address)] = get_grant_creator()

# Configure issuer (cold address) settings -------------------------------------
# grant_creator = get_grant_creator()
#
# cold_settings_tx = xrpl.models.transactions.AccountSet(
#     account=grant_creator.address,
#     transfer_rate=0,
#     tick_size=5,
#     domain=bytes.hex("trusttrace.com".encode("ASCII")),
#     set_flag=xrpl.models.transactions.AccountSetAsfFlag.ASF_DEFAULT_RIPPLE,
# )
# print("Sending cold address AccountSet transaction...")
# response = xrpl.transaction.submit_and_wait(cold_settings_tx, client, grant_creator)
# print(response)
# #

# grant_creator = get_grant_creator()
# grant_receiver = get_grant_receiver()
# contractor_1 = get_contractor_1()
# # setup_trustline(grant_creator, grant_receiver)
# setup_trustline(grant_creator, contractor_1)
# # setup_trustline(grant_receiver, contractor_1)
#
# send_tusd_transaction(grant_creator, contractor_1, 5000)




