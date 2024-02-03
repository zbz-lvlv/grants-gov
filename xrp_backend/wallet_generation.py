import os
from xrpl.wallet import Wallet
from xrpl.wallet import generate_faucet_wallet

import xrpl
testnet_url = "https://testnet.xrpl-labs.com/"
client = xrpl.clients.JsonRpcClient(testnet_url)

from xrpl.wallet import Wallet

wallet = Wallet.from_seed(seed="sEd7gFzM7cH4b2eva3fRcSLhSTz811X")
print("Wallet Address:", wallet.address)

grant_creator = generate_faucet_wallet(client, debug=True)
print("Grant Creator: " + grant_creator.address + "\nSeed: " + grant_creator.seed)
grant_receiver = generate_faucet_wallet(client, debug=True)
print("Grant Receiver: " + grant_creator.address + "\nSeed: " + grant_receiver.seed)
contractor_1 = generate_faucet_wallet(client, debug=True)
print("Contractor 1: " + grant_creator.address + "\nSeed: " + contractor_1.seed)
contractor_2 = generate_faucet_wallet(client, debug=True)
print("Contractor 2: " + grant_creator.address + "\nSeed: " + contractor_2.seed)
contractor_3 = generate_faucet_wallet(client, debug=True)
print("Contractor 3: " + grant_creator.address + "\nSeed: " + contractor_3.seed)
contractor_4 = generate_faucet_wallet(client, debug=True)
print("Contractor 4: " + grant_creator.address + "\nSeed: " + contractor_4.seed)

