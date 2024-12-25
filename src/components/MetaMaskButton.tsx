import React, { useState } from 'react';
import { ethers } from 'ethers';

const MetaMaskButton: React.FC = () => {
    const [accounts, setAccounts] = useState<string[]>([]);

    // Function to connect to MetaMask and retrieve accounts
    const connectMetaMask = async () => {
        if (typeof window.ethereum !== 'undefined') {
            try {
                // Request accounts from MetaMask
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

                // Log and set accounts in the state
                console.log('Connected Accounts:', accounts);
                setAccounts(accounts);
            } catch (error) {
                console.error('Error connecting to MetaMask:', error);
            }
        } else {
            alert('MetaMask is not installed. Please install MetaMask and try again.');
        }
    };

    return (
        <div>
            <button
                onClick={connectMetaMask}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#f6851b',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Connect to MetaMask
            </button>

            {accounts.length > 0 && (
                <div style={{ marginTop: '20px' }}>
                    <h3 className='text-white'>Connected Accounts:</h3>
                    <ul>
                        {accounts.map((account, index) => (
                            <li className='text-white' key={index}>{account}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MetaMaskButton;
