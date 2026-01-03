// 🔒 FILE LOCKED: DO NOT MERGE THIS PAGE WITH OTHERS
import React from 'react';

const RegisterPage = ({ onNav }) => {
  return (
    <div className="min-h-screen flex bg-white animate-in fade-in duration-500">
      {/* Left Column: Testimonial & Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gray-900">
        <img 
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&fit=crop" 
          alt="Fashion Model" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        
        <div className="relative z-10 p-16 h-full flex flex-col">
          <div 
            onClick={() => onNav('home')}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">LuxeShop</span>
          </div>

          <div className="mt-auto max-w-lg space-y-8">
            <div className="flex text-yellow-400 text-lg">★★★★★</div>
            <p className="text-3xl font-bold text-white leading-relaxed tracking-tight italic">
              "The premium shopping experience I've been waiting for. Fast delivery, exclusive items, and seamless checkout."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full border-2 border-white/20 p-0.5 overflow-hidden">
                <img src="https://i.pravatar.cc/150?u=sarah" alt="Sarah Jenkins" className="w-full h-full rounded-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-white">Sarah Jenkins</h4>
                <p className="text-sm text-white/50 font-medium">Verified Buyer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Registration Form */}
      <div className="w-full lg:w-1/2 flex flex-col p-8 md:p-16 overflow-y-auto h-screen">
        <div className="max-w-md w-full mx-auto space-y-8 py-10">
          <div className="space-y-3">
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">Create your account</h2>
            <p className="text-gray-400 font-medium">Join the community and experience premium shopping tailored just for you.</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 border border-gray-100 py-3 rounded-xl hover:bg-gray-50 transition-all font-bold text-sm">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" /> Google
            </button>
            <button className="flex items-center justify-center gap-3 border border-gray-100 py-3 rounded-xl hover:bg-gray-50 transition-all font-bold text-sm">
              <img src="https://www.svgrepo.com/show/511330/apple-173.svg" className="w-5 h-5" alt="Apple" /> Apple
            </button>
          </div>

          <div className="relative flex items-center">
            <div className="flex-grow border-t border-gray-100"></div>
            <span className="flex-shrink mx-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Or continue with email</span>
            <div className="flex-grow border-t border-gray-100"></div>
          </div>

          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onNav('home'); }}>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-900 uppercase tracking-widest">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <input type="text" placeholder="Enter your full name" className="w-full bg-gray-50/50 border border-gray-100 rounded-xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-100 transition-all font-medium text-sm" required />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-900 uppercase tracking-widest">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth="2"/></svg>
                </div>
                <input type="email" placeholder="name@example.com" className="w-full bg-gray-50/50 border border-gray-100 rounded-xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-100 transition-all font-medium text-sm" required />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-900 uppercase tracking-widest">Create Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <input type="password" placeholder="At least 8 characters" className="w-full bg-gray-50/50 border border-gray-100 rounded-xl py-4 pl-12 pr-12 outline-none focus:ring-2 focus:ring-blue-100 transition-all font-medium text-sm" required />
                <button type="button" className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeWidth="2"/></svg>
                </button>
              </div>
              <div className="flex gap-1 h-1 mt-2">
                <div className="flex-1 bg-green-500 rounded-full"></div>
                <div className="flex-1 bg-green-500 rounded-full"></div>
                <div className="flex-1 bg-gray-100 rounded-full"></div>
                <div className="flex-1 bg-gray-100 rounded-full"></div>
              </div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Password strength: Medium</p>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-900 uppercase tracking-widest">Confirm Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <input type="password" placeholder="Re-enter your password" className="w-full bg-gray-50/50 border border-gray-100 rounded-xl py-4 pl-12 pr-12 outline-none focus:ring-2 focus:ring-blue-100 transition-all font-medium text-sm" required />
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <input type="checkbox" className="w-5 h-5 border-gray-200 rounded text-blue-600 focus:ring-blue-100" required />
              <p className="text-xs font-medium text-gray-500">I agree to the <button type="button" className="text-blue-600 font-bold hover:underline">Terms of Service</button> and <button type="button" className="text-blue-600 font-bold hover:underline">Privacy Policy</button></p>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-100">
              Create Account
            </button>
          </form>

          <p className="text-center text-sm font-medium text-gray-500">
            Already have an account? <button onClick={() => onNav('login')} className="text-blue-600 font-bold hover:underline">Log in</button>
          </p>

          <div className="pt-10 flex justify-center gap-10 opacity-30">
            <div className="flex items-center gap-2 text-[10px] font-bold text-gray-900 uppercase tracking-widest">
               <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"/></svg>
               Secure Encrypted
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold text-gray-900 uppercase tracking-widest">
               <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>
               Data Privacy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;