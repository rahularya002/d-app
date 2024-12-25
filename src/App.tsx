
import MetaMaskButton from './components/MetaMaskButton';

const App: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-black">
            <header className="h-40 w-80 text-center">
                <h1 className='text-2xl font-semibold text-center text-white mb-10'>MetaMask Integration</h1>
                <MetaMaskButton />
            </header>
        </div>
    );
};

export default App;
