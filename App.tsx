import { useState, useEffect } from "react";

// ─── Types ───
interface Official {
  id: number;
  role: string;
  roleEn: string;
  name: string;
  phone: string;
  address: string;
  photo: string;
  bio: string;
  color: string;
  icon: string;
}

// ─── Default Data ───
const defaultOfficials: Official[] = [
  {
    id: 1, role: "সভাপতি", roleEn: "President",
    name: "আবদুল কুদ্দুস সর্দার",
    phone: "০১৭-২৭৫-৯১৬৩৩",
    address: "মৌজা মালি বাড়ি সরদারপাড়া, গাইবান্ধা সদর, লক্ষীপুর",
    photo: "👤", bio: "মালি বাড়ি সরদারপাড়া জামে মসজিদের সভাপতি। মসজিদ পরিচালনা পর্ষদের নেতৃত্ব প্রদান করছেন।",
    color: "from-emerald-600 to-green-700", icon: "🏛️",
  },
  {
    id: 2, role: "সাধারণ সম্পাদক", roleEn: "General Secretary",
    name: "মাওলানা মুত্তালিব হোসেন",
    phone: "০১৭-২২৩-৩৯৯১০",
    address: "মৌজা মালি বাড়ি সরদারপাড়া, গাইবান্ধা সদর, লক্ষীপুর",
    photo: "👤", bio: "মসজিদ পরিচালনা পর্ষদের সাধারণ সম্পাদক। মসজিদের দৈনন্দিন কার্যক্রম পরিচালনা করেন।",
    color: "from-teal-600 to-cyan-700", icon: "📋",
  },
  {
    id: 3, role: "ক্যাশিয়ার", roleEn: "Cashier",
    name: "আবদুর রউফ সর্দার",
    phone: "০১৭৪২-৩২৪২৪৭",
    address: "মৌজা মালি বাড়ি সরদারপাড়া, গাইবান্ধা সদর, লক্ষীপুর",
    photo: "👤", bio: "মসজিদ পরিচালনা পর্ষদের ক্যাশিয়ার। মসজিদের আর্থিক লেনদেন পরিচালনা করেন।",
    color: "from-amber-600 to-yellow-700", icon: "💰",
  },
  {
    id: 4, role: "খতিব", roleEn: "Khatib",
    name: "মাওলানা মো: কারী মোজাফফর হোসেন",
    phone: "০১৭XX-XXXXXX",
    address: "মৌজা মালি বাড়ি সরদারপাড়া, গাইবান্ধা সদর, লক্ষীপুর",
    photo: "👤", bio: "মালি বাড়ি সরদারপাড়া জামে মসজিদের সম্মানিত খতিব। জুমার ও বিশেষ নামাজের খুতবা প্রদান করেন।",
    color: "from-purple-600 to-violet-700", icon: "📖",
  },
];

// ─── Main App ───
export function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [, setShowNotification] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatBengaliDate = (date: Date) => {
    const bengaliMonths = ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"];
    const bengaliDays = ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"];
    return `${bengaliDays[date.getDay()]}, ${date.getDate()} ${bengaliMonths[date.getMonth()]} ${date.getFullYear()}`;
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("bn-BD", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  };

  // ═══════════════════════════════════════
  // ─── MAIN APP (FULLY PUBLIC) ───
  // ═══════════════════════════════════════
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a2e0a] via-[#0d3d0d] to-[#081a08] font-['Noto_Sans_Bengali',sans-serif]" style={{ maxWidth: "480px", margin: "0 auto" }}>
      
      {/* ─── Header ─── */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2e0a] via-[#1a4a1a] to-[#0a2e0a]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08),transparent_70%)]"></div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
        
        <div className="relative z-10 bg-gradient-to-r from-[#0d3d0d] via-[#1a5c1a] to-[#0d3d0d] px-4 pt-3 pb-4">
          <div className="flex justify-between items-center text-[#8fbc8f]/70 text-xs mb-3">
            <span>{formatTime(currentTime)}</span>
            <span className="bg-[#d4af37]/20 text-[#d4af37] text-xs px-2 py-0.5 rounded-full font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full animate-pulse"></span>
              পাবলিক ভিউ
            </span>
          </div>
          
          <div className="text-center relative">
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 text-[#d4af37]/40 text-2xl">✦</div>
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 text-[#d4af37]/40 text-2xl">✦</div>
            
            <div className="text-5xl mb-3 drop-shadow-lg" style={{ filter: "drop-shadow(0 0 10px rgba(212,175,55,0.3))" }}>🕌</div>
            <h1 className="text-2xl font-bold islamic-shimmer mb-1">মালি বাড়ি সরদারপাড়া জামে মসজিদ</h1>
            <p className="text-[#8fbc8f] text-sm mt-1 font-medium">মৌজা মালি বাড়ি সরদারপাড়া</p>
            <p className="text-[#4a7c4a] text-xs mt-1">গাইবান্ধা সদর, ১ নং লক্ষীপুর</p>
            <p className="text-[#3a6b3a] text-xs mt-1">{formatBengaliDate(currentTime)}</p>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent"></div>
      </div>

      {/* ─── PUBLIC NOTICE ─── */}
      <div className="mx-4 mt-4 bg-gradient-to-r from-[#1a3a1a]/80 via-[#0d2e0d]/80 to-[#1a3a1a]/80 border border-[#d4af37]/20 rounded-2xl p-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#d4af37]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="text-2xl flex-shrink-0">📢</div>
            <div>
              <p className="text-[#8fbc8f] text-sm font-semibold">আজকের ঘোষণা</p>
              <p className="text-[#6a9a6a]/70 text-xs mt-1">শুক্রবারের জুমার নামাজ জামাতে আদায় করুন। চাঁদা প্রদানে সহযোগিতা করুন।</p>
            </div>
          </div>
          <button onClick={() => setShowNotification(false)} className="text-[#4a7c4a] hover:text-[#8fbc8f] text-lg flex-shrink-0">✕</button>
        </div>
      </div>

      {/* ─── Bkash Donation Card ─── */}
      <div className="mx-4 mt-4 bg-gradient-to-br from-[#1a2e1a]/80 via-[#2a4a2a]/60 to-[#1a3a1a]/80 border border-[#d4af37]/30 rounded-2xl p-4 relative overflow-hidden glow-gold">
        <div className="absolute top-0 left-0 w-40 h-40 bg-[#d4af37]/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#d4af37]/5 rounded-full translate-x-1/2 translate-y-1/2"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">💰</span>
            <h2 className="text-[#d4af37] font-bold text-base">মসজিদ চাঁদা প্রদান</h2>
          </div>
          <div className="bg-[#0a2e0a]/60 backdrop-blur-sm rounded-2xl p-4 border border-[#d4af37]/20">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#d4af37] to-[#b8860b] rounded-xl flex items-center justify-center text-2xl shadow-lg shadow-[#d4af37]/20">
                💳
              </div>
              <div>
                <p className="text-[#8fbc8f] text-xs font-semibold">বিকাশ (মার্চেন্ট)</p>
                <p className="text-white text-lg font-bold tracking-wider">০১৭১৩-৯২৮০২৪</p>
              </div>
            </div>
            <a
              href="https://play.google.com/store/apps/details?id=com.bkash.android"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-[#d4af37] to-[#b8860b] rounded-xl p-3 text-center text-[#0a2e0a] font-bold text-sm shadow-lg shadow-[#d4af37]/30 active:scale-95 transition-transform block"
            >
              📱 বিকাশে চাঁদা দিন
            </a>
          </div>
        </div>
      </div>

      {/* ─── Prayer Times ─── */}
      <div className="mx-4 mt-4 bg-[#0d3d0d]/60 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl">🕋</span>
          <h2 className="text-[#d4af37] font-bold text-base">আজকের নামাজের সময়সূচি</h2>
        </div>
        <div className="grid grid-cols-5 gap-2">
          {[
            { name: "ফজর", time: "০৪:৩৫", icon: "🌅" },
            { name: "যোহর", time: "১২:১৫", icon: "☀️" },
            { name: "আসর", time: "০৩:৪৫", icon: "🌤️" },
            { name: "মাগরিব", time: "০৬:২০", icon: "🌇" },
            { name: "ইশা", time: "০৭:৪৫", icon: "🌙" },
          ].map((prayer) => (
            <div key={prayer.name} className="text-center bg-[#0a2e0a]/60 rounded-xl p-2 border border-[#d4af37]/15 hover:border-[#d4af37]/40 hover:bg-[#1a4a1a]/60 transition-all duration-300">
              <div className="text-lg mb-1">{prayer.icon}</div>
              <p className="text-white text-xs font-semibold">{prayer.name}</p>
              <p className="text-[#d4af37] text-sm font-bold mt-1">{prayer.time}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Officials Section ─── */}
      <div className="mx-4 mt-6 mb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">👥</span>
            <h2 className="text-[#d4af37] font-bold text-lg">পরিচালনা পর্ষদ</h2>
          </div>
          <span className="bg-[#d4af37]/20 text-[#d4af37] text-xs font-bold px-2 py-1 rounded-full">
            {defaultOfficials.length} জন
          </span>
        </div>

        <div className="space-y-3">
          {defaultOfficials.map((official) => (
            <div key={official.id} className="bg-[#0d3d0d]/70 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl overflow-hidden hover:border-[#d4af37]/40 transition-all duration-300">
              <div className="flex items-center gap-4 p-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${official.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden flex-shrink-0`}>
                  {official.photo.startsWith("data:") ? (
                    <img src={official.photo} alt={official.name} className="w-full h-full object-cover" />
                  ) : (
                    <span>{official.icon}</span>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-bold text-base truncate">{official.name}</h3>
                  <p className={`text-sm font-semibold bg-gradient-to-r ${official.color} bg-clip-text text-transparent mt-0.5`}>
                    {official.role}
                  </p>
                  <p className="text-[#4a7c4a] text-xs mt-1 flex items-center gap-1">
                    <span>📞</span> {official.phone}
                  </p>
                </div>

                <button
                  onClick={() => {
                    const el = document.getElementById("detail-modal");
                    if (el) el.style.display = "flex";
                  }}
                  className="w-9 h-9 bg-[#d4af37]/20 rounded-xl flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37]/40 transition-colors text-sm flex-shrink-0"
                  title="বিস্তারিত দেখুন"
                >
                  👁️
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 bg-[#0a2e0a]/60 border border-[#d4af37]/20 rounded-xl p-3 flex items-center gap-3">
          <span className="text-2xl flex-shrink-0">🕌</span>
          <div>
            <p className="text-[#d4af37] text-xs font-bold">মালি বাড়ি সরদারপাড়া জামে মসজিদ</p>
            <p className="text-[#4a7c4a] text-xs mt-0.5">মৌজা মালি বাড়ি সরদারপাড়া, গাইবান্ধা সদর, লক্ষীপুর</p>
          </div>
        </div>
      </div>

      {/* ─── Quick Contact ─── */}
      <div className="mx-4 mt-4 mb-4">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl">📞</span>
          <h2 className="text-[#d4af37] font-bold text-lg">দ্রুত যোগাযোগ</h2>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {defaultOfficials.map((official) => (
            <a
              key={`call-${official.id}`}
              href={`tel:${official.phone.replace(/[০-৯]/g, (d) => String("০১২৩৪৫৬৭৮৯".indexOf(d)))}`}
              className={`bg-gradient-to-br ${official.color} rounded-2xl p-4 text-center text-white shadow-lg shadow-[#d4af37]/10 hover:shadow-xl hover:shadow-[#d4af37]/20 transition-all duration-300 active:scale-95`}
            >
              <div className="text-3xl mb-2">{official.icon}</div>
              <p className="font-bold text-sm">{official.role}</p>
              <p className="text-white/80 text-xs mt-1">{official.name}</p>
              <div className="mt-2 bg-white/20 rounded-full px-3 py-1 text-xs font-semibold inline-block">
                📞 কল করুন
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ─── Mosque Info ─── */}
      <div className="mx-4 mt-4 mb-8">
        <div className="bg-[#0d3d0d]/60 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xl">🏗️</span>
            <h2 className="text-[#d4af37] font-bold text-base">মসজিদের তথ্য</h2>
          </div>
          <div className="space-y-2">
            {[
              { icon: "📍", title: "মালি বাড়ি সরদারপাড়া জামে মসজিদ", desc: "মৌজা মালি বাড়ি সরদারপাড়া, গাইবান্ধা সদর, ১ নং লক্ষীপুর" },
              { icon: "📅", title: "প্রতিষ্ঠাকাল", desc: "১৯৮৫ সাল" },
              { icon: "📐", title: "ধারণক্ষমতা", desc: "৫০০+ মুসল্লি" },
              { icon: "🏫", title: "মাদ্রাসা/কিতাবখানা", desc: "নারী-পুরুষ আলাদা মকতব চালু আছে" },
            ].map((info, i) => (
              <div key={i} className="flex items-start gap-3 bg-[#0a2e0a]/40 rounded-xl p-3">
                <span className="text-lg flex-shrink-0">{info.icon}</span>
                <div>
                  <p className="text-[#8fbc8f] text-sm font-semibold">{info.title}</p>
                  <p className="text-[#4a7c4a] text-xs">{info.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Footer ─── */}
      <div className="bg-[#081a08]/80 border-t border-[#d4af37]/20 px-4 py-4 text-center">
        <div className="flex justify-center gap-2 mb-2">
          <span className="text-[#d4af37]/40 text-lg">✦</span>
          <span className="text-[#d4af37]/40 text-lg">🕌</span>
          <span className="text-[#d4af37]/40 text-lg">✦</span>
        </div>
        <p className="text-[#4a7c4a] text-xs">🕌 মালি বাড়ি সরদারপাড়া জামে মসজিদ পরিচালনা পর্ষদ</p>
        <p className="text-[#3a6b3a] text-xs mt-1">গাইবান্ধা সদর, লক্ষীপুর</p>
        
        <div className="mt-3 bg-gradient-to-r from-[#d4af37]/10 via-[#d4af37]/20 to-[#d4af37]/10 border border-[#d4af37]/30 rounded-xl p-3">
          <p className="text-[#d4af37] text-xs font-bold mb-1">🛡️ ওয়েবসাইট — পাবলিক ভিউ</p>
          <p className="text-[#4a7c4a] text-xs">© ২০২৫ সর্বস্বত্ব সংরক্ষিত</p>
        </div>
        
        <p className="text-[#2a5a2a] text-xs mt-3">© ২০২৫ সর্বস্বত্ব সংরক্ষিত</p>
      </div>

      {/* ═══════════════════════════════════════ */}
      {/* ─── OFFICIAL DETAIL MODAL ─── */}
      {/* ═══════════════════════════════════════ */}
      {defaultOfficials.map((official) => (
        <div
          key={`modal-${official.id}`}
          id={`detail-modal`}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-end justify-center hidden"
          onClick={() => {
            const el = document.getElementById(`detail-modal`);
            if (el) el.style.display = "none";
          }}
        >
          <div
            className="bg-gradient-to-b from-[#0d3d0d] to-[#081a08] w-full max-w-[480px] rounded-t-3xl p-6 animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-1.5 bg-[#d4af37]/40 rounded-full mx-auto mb-4"></div>
            
            <div className="flex justify-between items-start mb-4">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${official.color} flex items-center justify-center text-4xl shadow-xl overflow-hidden`}>
                {official.photo.startsWith("data:") ? (
                  <img src={official.photo} alt={official.name} className="w-full h-full object-cover" />
                ) : (
                  <span>{official.icon}</span>
                )}
              </div>
              <button
                onClick={() => {
                  const el = document.getElementById(`detail-modal`);
                  if (el) el.style.display = "none";
                }}
                className="w-10 h-10 bg-[#d4af37]/20 rounded-full flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37]/40 transition-colors"
              >✕</button>
            </div>

            <h2 className="text-white text-2xl font-bold">{official.name}</h2>
            <p className={`text-sm font-semibold bg-gradient-to-r ${official.color} bg-clip-text text-transparent mt-1`}>
              {official.role} • {official.roleEn}
            </p>

            <div className="mt-4 bg-[#0a2e0a]/60 rounded-2xl p-4">
              <p className="text-[#8fbc8f] text-sm leading-relaxed">{official.bio}</p>
            </div>

            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3 bg-[#0a2e0a]/40 rounded-xl p-3">
                <span className="text-xl">📞</span>
                <div>
                  <p className="text-[#4a7c4a] text-xs">মোবাইল নম্বর</p>
                  <p className="text-white font-semibold text-sm">{official.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-[#0a2e0a]/40 rounded-xl p-3">
                <span className="text-xl">📍</span>
                <div>
                  <p className="text-[#4a7c4a] text-xs">ঠিকানা</p>
                  <p className="text-white font-semibold text-sm">{official.address}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <a href={`tel:${official.phone.replace(/[০-৯]/g, (d) => String("০১২৩৪৫৬৭৮৯".indexOf(d)))}`} className={`bg-gradient-to-r ${official.color} rounded-2xl p-4 text-center text-white font-bold text-sm shadow-lg active:scale-95 transition-transform`}>
                📞 ফোন করুন
              </a>
              <a href={`https://wa.me/88${official.phone.replace(/[০-৯]/g, (d) => String("০১২৩৪৫৬৭৮৯".indexOf(d)))}`} className="bg-gradient-to-r from-[#d4af37] to-[#b8860b] rounded-2xl p-4 text-center text-[#0a2e0a] font-bold text-sm shadow-lg active:scale-95 transition-transform">
                💬 হোয়াটসঅ্যাপ
              </a>
            </div>

            <div className="h-4"></div>
          </div>
        </div>
      ))}

      {/* CSS Animation */}
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slideUp 0.3s ease-out;
        }
        * {
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
    </div>
  );
}
