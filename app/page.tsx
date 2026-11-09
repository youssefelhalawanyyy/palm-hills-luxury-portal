// Standalone Next.js 15 Luxury Portal for Palm Hills Developments (Sheikh Zayed)
// Live customized via Omar & Antigravity Visual Customizer
// Theme: obsidian-gold | Accent: #D4AF37
import React from 'react';

export default function ClientCustomizedPortal() {
  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 p-8 space-y-8">
      <header className="border-b border-[#D4AF37]/30 pb-6 flex flex-wrap justify-between items-center gap-4">
        <div>
          <span className="text-[11px] font-mono tracking-widest uppercase font-bold text-[#D4AF37]">
            DEPLOY Luxury Architecture
          </span>
          <h1 className="text-3xl font-serif font-black text-white mt-1">
            Palm Hills Developments — Ultra Luxury Living
          </h1>
          <p className="text-sm text-zinc-400 font-mono mt-1">
            Now Launching: Badya & Hacienda Waters Estates
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1 text-xs font-mono">
            ● Paymob &amp; InstaPay IPN Live
          </span>
          <span className="rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#D4AF37] px-3 py-1 text-xs font-mono font-bold">
            OBSIDIAN-GOLD
          </span>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl border border-[#D4AF37]/40 bg-[#0d121f]/80 backdrop-blur-xl shadow-xl">
          <span className="text-[10px] text-[#D4AF37] uppercase font-mono font-bold">Signature Residence</span>
          <h3 className="text-xl font-bold mt-1 text-white">Signature Palm Villa (480 sqm)</h3>
          <p className="text-xs text-zinc-400 mt-2">5 Bedrooms • 6 Baths • Private Infinity Pool • Golf View</p>
          <div className="mt-4 pt-4 border-t border-zinc-800 flex justify-between items-center">
            <span className="text-xs text-zinc-400">10% Down Payment:</span>
            <span className="text-sm font-bold text-emerald-400 font-mono">2,450,000 EGP</span>
          </div>
        </div>

        <div className="p-6 rounded-2xl border border-[#D4AF37]/40 bg-[#0d121f]/80 backdrop-blur-xl shadow-xl">
          <span className="text-[10px] text-[#D4AF37] uppercase font-mono font-bold">Sky Residence</span>
          <h3 className="text-xl font-bold mt-1 text-white">Badya Horizon Penthouse (295 sqm)</h3>
          <p className="text-xs text-zinc-400 mt-2">3 Bedrooms • 4 Baths • Panoramic Sky Terrace</p>
          <div className="mt-4 pt-4 border-t border-zinc-800 flex justify-between items-center">
            <span className="text-xs text-zinc-400">10% Down Payment:</span>
            <span className="text-sm font-bold text-emerald-400 font-mono">1,280,000 EGP</span>
          </div>
        </div>

        <div className="p-6 rounded-2xl border border-[#D4AF37]/40 bg-[#0d121f]/80 backdrop-blur-xl shadow-xl">
          <span className="text-[10px] text-[#D4AF37] uppercase font-mono font-bold">Payment Rails</span>
          <h3 className="text-xl font-bold mt-1 text-white">Central Bank Escrow</h3>
          <p className="text-xs text-zinc-400 mt-2">Sub-second InstaPay verification &amp; Paymob credit card installments.</p>
          <div className="mt-4 pt-4 border-t border-zinc-800">
            <button className="w-full py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-amber-600 text-black font-bold font-mono text-xs">
              Proceed to Paymob Escrow
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
