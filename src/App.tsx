import React, { useEffect, useRef, useState } from 'react';
import { Github, Twitter, Copy, Check } from 'lucide-react';
import { useStarfield } from './useStarfield';

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [copied, setCopied] = useState(false);
  const contractAddress = "TO BE ANNOUNCED";
  useStarfield(canvasRef);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'black' }}
      />
      <div className="relative z-10">
        {/* Header */}
        <header className="sticky top-0 backdrop-blur-sm bg-black-900/80 border-b border-white-100">
          <div className="container mx-auto flex justify-between items-center p-4">
            <div className="text-xl font-bold">
              <img src="/Solana Agent Kit lnglogo.png" alt="SOLANA AGENT KIT" className="h-6" />
            </div>
            <div className="flex gap-4">
              <a href="https://x.com/_SolanaAgentKit" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="https://github.com/sendaifun/solana-agent-kit" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                <Github size={24} />
              </a>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-6 mt-20">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold mb-2">
              Connect any AI
              <br />
              Agents to <span className="text-cyan-400">Solana</span>
              <br />
              Protocols
            </h1>

            <div className="mt-4 text-gray-400">SendAI</div>

            <div className="mt-8 space-y-4">
              <div className="flex gap-4 items-center">
                <a 
                  href="https://github.com/sendaifun/solana-agent-kit" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-cyan-400 text-black px-6 py-2 rounded hover:bg-cyan-300 transition-colors flex items-center gap-2"
                >
                  <Github size={20} />
                  Start on Github
                </a>
                <a 
                  href="https://github.com/sendaifun/solana-agent-kit/tree/main/docs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="border border-gray-700 px-6 py-2 rounded hover:bg-gray-800 transition-colors"
                >
                  View Docs
                </a>
              </div>
              
              <div className="flex items-center gap-2 rounded bg-gray-900/80 backdrop-blur-sm border border-gray-700 overflow-hidden w-fit">
                <span className="bg-gray-800/50 text-cyan-400 px-3 py-2 font-medium text-sm border-r border-gray-700">
                  $SOLAK CA
                </span>
                <span className="px-3 py-2 text-sm font-mono text-gray-300">{contractAddress}</span>
                <button
                  onClick={copyToClipboard}
                  className="px-3 py-2 hover:bg-gray-800 transition-colors"
                  title="Copy contract address"
                >
                  {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} className="text-gray-400 hover:text-cyan-400" />}
                </button>
              </div>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
            {/* Card 1 */}
            <a 
              href="https://github.com/sendaifun/solana-agent-kit?tab=readme-ov-file#deploy-a-new-token"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 border border-gray-800 rounded-lg hover:border-yellow-500 cursor-pointer group backdrop-blur-sm bg-black/30"
            >
              <h3 className="text-xl font-semibold text-yellow-500 mb-2">Create and Trade Solana Tokens</h3>
              <p className="text-gray-400">Deploy SPL tokens or launch directly on Pump.fun. Swap any token using Jupiter.</p>
            </a>

            {/* Card 2 */}
            <a 
              href="https://github.com/sendaifun/solana-agent-kit?tab=readme-ov-file#create-nft-collection"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 border border-gray-800 rounded-lg hover:border-cyan-400 cursor-pointer group backdrop-blur-sm bg-black/30"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Launch and Mint NFTs</h3>
              <p className="text-gray-400">Collection deployment and NFT minting using Metaplex</p>
            </a>

            {/* Card 3 */}
            <a 
              href="https://github.com/sendaifun/solana-agent-kit?tab=readme-ov-file#send-an-spl-token-airdrop-via-zk-compression"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 border border-gray-800 rounded-lg hover:border-cyan-400 cursor-pointer group backdrop-blur-sm bg-black/30"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Send ZK Compressed Airdrops</h3>
              <p className="text-gray-400">Airdrop at 1000x lower cost using Light Protocol and Helius</p>
            </a>

            {/* Card 4 */}
            <a 
              href="https://github.com/sendaifun/solana-agent-kit?tab=readme-ov-file#-core-blockchain-features"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 border border-gray-800 rounded-lg hover:border-pink-500 cursor-pointer group backdrop-blur-sm bg-black/30"
            >
              <h3 className="text-xl font-semibold text-pink-500 mb-2">Launch tokens on AMMs</h3>
              <p className="text-gray-400">Create AMM pools on top Solana DEXs like Meteora, Raydium, and Orca</p>
            </a>

            {/* Card 5 */}
            <a 
              href="https://github.com/sendaifun/solana-agent-kit?tab=readme-ov-file#lend-tokens"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 border border-gray-800 rounded-lg hover:border-blue-500 cursor-pointer group backdrop-blur-sm bg-black/30"
            >
              <h3 className="text-xl font-semibold text-blue-500 mb-2">Execute Solana Blinks (Actions)</h3>
              <p className="text-gray-400">Lend on Lulo or Play on SEND Arcade or stake your SOL for JupSOL</p>
            </a>

            {/* Card 6 */}
            <a 
              href="https://github.com/sendaifun/solana-agent-kit?tab=readme-ov-file#quick-start"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 border border-gray-800 rounded-lg hover:border-cyan-400 cursor-pointer group backdrop-blur-sm bg-black/30"
            >
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">AI Integrations</h3>
              <p className="text-gray-400">From Langchain to Open AI's GPT and DALL-E and more!</p>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;