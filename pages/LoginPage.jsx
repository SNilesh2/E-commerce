// 🔒 FILE LOCKED: DO NOT MERGE THIS PAGE WITH OTHERS
import React from 'react';

const LoginPage = ({ onNav }) => {
  return (
    <div className="min-h-screen flex bg-white animate-in fade-in duration-500">
      {/* Left Column: Visual & Social Proof */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-[#D4A373]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#D4A373] to-[#E9EDC9] opacity-90"></div>
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&fit=crop" 
          alt="Abstract Background" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="relative z-10 flex flex-col justify-end p-16 h-full text-white">
          <div className="mb-12">
             <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-8">
               <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
             </div>
             <h1 className="text-5xl font-black tracking-tighter leading-tight mb-6">
               Redefining your<br />digital shopping experience.
             </h1>
             <p className="text-white/80 text-xl font-medium max-w-md leading-relaxed">
               Join over 2 million customers enjoying seamless, secure, and premium shopping worldwide.
             </p>
          </div>
          
          <div className="pt-8 border-t border-white/20 flex items-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-[#D4A373] bg-gray-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="user" />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-[#D4A373] bg-white text-gray-900 flex items-center justify-center text-xs font-bold">+2k</div>
            </div>
            <div>
              <div className="flex text-yellow-400 text-sm mb-1">★★★★★</div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/60">Trusted by customers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col p-8 md:p-16">
        <div className="flex justify-between items-center mb-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">E-Store</span>
          </div>
          <button className="text-sm font-bold text-gray-400 hover:text-gray-900">Contact Support</button>
        </div>

        <div className="max-w-md w-full mx-auto my-auto space-y-10">
          <div className="space-y-2">
            <h2 className="text-4xl font-black text-gray-900 tracking-tight">Welcome back!</h2>
            <p className="text-gray-400 font-medium">Please enter your details to access your account.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onNav('home'); }}>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-900 uppercase tracking-widest">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth="2"/></svg>
                </div>
                <input type="email" placeholder="name@example.com" className="w-full bg-gray-50/50 border border-gray-100 rounded-xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-100 transition-all font-medium" required />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <label className="text-xs font-bold text-gray-900 uppercase tracking-widest">Password</label>
                <button type="button" className="text-xs font-bold text-blue-600 hover:underline">Forgot Password?</button>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <input type="password" placeholder="Enter your password" className="w-full bg-gray-50/50 border border-gray-100 rounded-xl py-4 pl-12 pr-12 outline-none focus:ring-2 focus:ring-blue-100 transition-all font-medium" required />
                <button type="button" className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-300 hover:text-gray-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeWidth="2"/></svg>
                </button>
              </div>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-xl shadow-blue-100">
              Sign In <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </form>

          <div className="relative flex items-center">
            <div className="flex-grow border-t border-gray-100"></div>
            <span className="flex-shrink mx-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Or continue with</span>
            <div className="flex-grow border-t border-gray-100"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 border border-gray-100 py-3 rounded-xl hover:bg-gray-50 transition-all font-bold text-sm">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" /> Google
            </button>
            <button className="flex items-center justify-center gap-3 border border-gray-100 py-3 rounded-xl hover:bg-gray-50 transition-all font-bold text-sm">
              <img src="https://www.svgrepo.com/show/512317/github-142.svg" className="w-5 h-5" alt="Github" /> Github
            </button>
          </div>

          <p className="text-center text-sm font-medium text-gray-500">
            Don't have an account? <button onClick={() => onNav('register')} className="text-blue-600 font-bold hover:underline">Sign up for free</button>
          </p>
        </div>

        <div className="mt-auto flex justify-center gap-8 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          <button className="hover:text-gray-900">Privacy Policy</button>
          <button className="hover:text-gray-900">Terms of Service</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;