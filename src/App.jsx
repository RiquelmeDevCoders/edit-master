import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ArrowRight, CheckCircle2, Zap, Layers, ChevronDown, Volume2, Pause, Mic } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import logo from './assets/logo.png';
import aboutImage from './assets/about.jpeg';

const saasVideo1 = 'https://drive.google.com/file/d/1xJnTPr4hhU5xqCDBerM4Gm0kGw2gKJhr/preview';
const saasVideo2 = 'https://drive.google.com/file/d/1PC_JfQJ1SBk3bH7h-8u9kMIGtVJjNBAF/preview';
const saasVideo3 = 'https://drive.google.com/file/d/1YTo9oc4BsjWnwVZEPaOelXYl8X4f9v4O/preview';
const gatewayVideo1 = 'https://drive.google.com/file/d/123zuhE3FhDJf5GjSxD9ER5norqZGxa1d/preview';
const gatewayVideo2 = 'https://drive.google.com/file/d/17N0lQEqu6m2ssWJPP-5dIrMAZquPx9Zc/preview';
const gatewayVideo3 = 'https://drive.google.com/file/d/1VKkM43PdsJAiBsPMgVEWY1bcyGm_NYlQ/preview';
const appVideo1 = 'https://drive.google.com/file/d/1WYGfSkUxVqPqZlcJPNDQYWNJ_6pLvPPC/preview';
const appVideo2 = 'https://drive.google.com/file/d/1vzdZYO0QRcmw4SuH0ju_pvhYXZpWPjUD/preview';
const appVideo3 = 'https://drive.google.com/file/d/1i3RJHroZ17IIxB4Xv5_W6V_KlMcuLmTZ/preview';
const infoprodutoVideo1 = 'https://drive.google.com/file/d/1S5hk6Rm_LxK1Oy9di-NoUtYys9IjSMPy/preview';
const infoprodutoVideo2 = 'https://drive.google.com/file/d/1vow4LxthFNO0uux2irreFcsbDihOgJuG/preview';
const infoprodutoVideo3 = 'https://drive.google.com/file/d/1vZeU_2glSNIGV7QYGv-b-zzjcWvZhbGS/preview';
const agencyVideo1 = 'https://drive.google.com/file/d/1Uce5e1tVjZnTrkUzagb5axMBDLMm7yb6/preview';
const agencyVideo2 = 'https://drive.google.com/file/d/1RwwFZqDz-QsiUmYW-YNj8cnU5-SdQlRi/preview';
const agencyVideo3 = 'https://drive.google.com/file/d/1MmmNUH610nVg-FmWUi6-hsHXAj5nizP1/preview';
import designImage1 from './assets/design/design1.jpg';
import designImage2 from './assets/design/design2.jpg';
import designImage3 from './assets/design/design3.jpg';
import designImage4 from './assets/design/design4.jpg';
import designImage5 from './assets/design/design5.jpg';
import designImage6 from './assets/design/design6.jpg';
import logo1 from './assets/design/sharkpay-logo.png';
import logo2 from './assets/design/rapidyn-logo.png';

const META_PIXEL_ID = '837801989002547';

const initializeMetaPixel = () => {
  if (typeof window === 'undefined' || window.fbq) return;

  !function (f, b, e, v, n, t, s) {
    if (f.fbq) return; n = f.fbq = function () {
      n.callMethod ?
        n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    };
    if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
    n.queue = []; t = b.createElement(e); t.async = !0;
    t.src = v; s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

  window.fbq('init', META_PIXEL_ID);
  window.fbq('track', 'PageView');
};

const trackMetaEvent = (eventName, eventData = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, eventData);
  }
};

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const getWhatsAppLink = () => {
  const phone = "5584999924496";
  const message = encodeURIComponent("Vim pelo site da Edit Master! Gostaria de saber mais sobre a produção de conteúdo estratégico.");
  return `https://wa.me/${phone}?text=${message}`;
};

const MagicButton = ({ children, className, onClick, variant = 'primary', eventName = null, eventData = {} }) => {
  const handleClick = (e) => {
    if (eventName) {
      trackMetaEvent(eventName, eventData);
    }
    if (onClick) onClick(e);
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-50",
        className
      )}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#06b6d4_50%,#000000_100%)]" />
      <span className={cn(
        "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-all",
        variant === 'primary' ? "bg-slate-950/90" : "bg-slate-900/80"
      )}>
        {children}
      </span>
      <div className="absolute inset-0 -z-10 animate-pulse-glow bg-cyan-500/20 blur-xl"></div>
    </button>
  );
};

const StarField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const stars = Array.from({ length: 80 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5,
      speedX: (Math.random() - 0.5) * 0.2,
      speedY: (Math.random() - 0.5) * 0.2,
      opacity: Math.random(),
    }));

    function animate() {
      ctx.clearRect(0, 0, width, height);
      stars.forEach((star) => {
        ctx.fillStyle = `rgba(165, 243, 252, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        star.x += star.speedX;
        star.y += star.speedY;

        if (star.x < 0) star.x = width;
        if (star.x > width) star.x = 0;
        if (star.y < 0) star.y = height;
        if (star.y > height) star.y = 0;
      });
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none opacity-40" />;
};

const AudioPlayer = ({ name, role, quote, src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(src);

    const handleEnded = () => setIsPlaying(false);
    audioRef.current.addEventListener('ended', handleEnded);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener('ended', handleEnded);
      }
    };
  }, [src]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error("Erro ao reproduzir áudio:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-300">
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl -z-10 group-hover:bg-cyan-500/10 transition-all"></div>

      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={togglePlay}
          className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all flex-shrink-0 cursor-pointer z-20"
        >
          {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
        </button>

        <div className="flex-1 flex items-center gap-1 h-8">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 bg-gray-600 rounded-full"
              animate={{
                height: isPlaying ? [10, 20 + Math.random() * 15, 10] : 4,
                backgroundColor: isPlaying ? "#22d3ee" : "#4b5563"
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                delay: i * 0.1
              }}
            />
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-gray-300 italic text-sm">"{quote}"</p>
        <div>
          <h4 className="text-white font-bold">{name}</h4>
          <span className="text-xs text-gray-500 uppercase tracking-wider">{role}</span>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    trackMetaEvent('Contact', {
      content_name: 'Navbar WhatsApp Click',
      content_category: 'Contact'
    });
    window.open(getWhatsAppLink(), '_blank');
  };

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
      scrolled ? "bg-[#020617]/80 backdrop-blur-md border-cyan-900/20 py-4" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Edit Master Logo"
            className="w-16 h-16 object-contain"
          />
        </div>

        <div className="hidden md:flex gap-8">
          {['Sobre', 'Portfólio', 'Serviços', 'Feedbacks', 'FAQ'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`} className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <button
          onClick={handleWhatsAppClick}
          className="px-5 py-2 rounded-full border border-cyan-500/20 text-xs font-semibold hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all text-white shadow-[0_0_15px_rgba(6,182,212,0.15)]"
        >
          Fale Conosco
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    trackMetaEvent('InitiateCheckout', {
      content_name: 'Hero Iniciar Projeto',
      content_category: 'Lead'
    });
    window.open(getWhatsAppLink(), '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10 animate-pulse-glow" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 backdrop-blur-sm mb-8 shadow-[0_0_20px_rgba(6,182,212,0.15)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500 shadow-[0_0_10px_#06b6d4]"></span>
            </span>
            <span className="text-xs font-semibold text-cyan-100 tracking-wide uppercase">Conteúdo estratégico</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-500 leading-[1.1]">
            Criamos conteúdo estratégico <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">para sua empresa.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            A Edit Master combina narrativa, estética e método para construir posicionamento, comunicar valor e gerar resultados reais no digital.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <MagicButton
              className="w-full sm:w-auto"
              onClick={handleWhatsAppClick}
              eventName="InitiateCheckout"
              eventData={{
                content_name: 'Hero Iniciar Projeto Button',
                content_category: 'Lead'
              }}
            >
              <span className="flex items-center gap-2">
                Iniciar Projeto <ArrowRight size={16} />
              </span>
            </MagicButton>

            <button
              onClick={scrollToPortfolio}
              className="text-gray-300 hover:text-white text-sm font-medium transition-colors flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-cyan-500/20 transition-all border border-transparent group-hover:border-cyan-500/50">
                <Play size={12} fill="currentColor" />
              </div>
              Ver Portifólio
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent"></div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-black/80 z-0"></div>

              <div className="absolute inset-0 w-full h-full bg-gray-900 flex items-center justify-center z-10 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]">
                <img
                  src={aboutImage}
                  alt="Sobre a Edit Master"
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 border-[1px] border-cyan-500/30 rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.2)] pointer-events-none"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">A Essência da <span className="text-cyan-400">Edit Master</span></h2>

            <div className="space-y-6 text-gray-300 leading-relaxed font-light">
              <p>
                A Edit Master nasceu com uma missão clara: elevar o padrão do conteúdo digital. Ao longo dos últimos anos, construímos nossa própria estrutura de produção e aperfeiçoamos um mecanismo exclusivo que guia todo o nosso processo desde a análise do público até a criação estratégica de cada peça.
              </p>
              <p>
                Já produzimos mais de 500 vídeos a cada ciclo de poucos meses, o que nos deu domínio total sobre o que realmente funciona no digital ritmo, linguagem, estética, percepção e conversão. Não trabalhamos com achismo trabalhamos com método, constância e profundidade.
              </p>
              <p>
                Nosso time é formado por profissionais especializados, focados em entender a essência de cada marca e transformar isso em conteúdo que constrói posicionamento, reforça autoridade e, principalmente, gera resultado real.
              </p>
            </div>

            <div className="pt-4">
              <div className="h-[1px] w-full bg-gradient-to-r from-cyan-500/50 to-transparent mb-4"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MotionShowcase = () => {
  const [activeTab, setActiveTab] = useState('saas');

  const tabs = [
    { id: 'saas', label: 'SaaS' },
    { id: 'gateway', label: 'Gateway' },
    { id: 'app', label: 'Aplicativo' },
    { id: 'infoproduto', label: 'Infoproduto' },
    { id: 'agency', label: 'Criativos Agência' },
  ];

  const motions = {
    saas: [
      { id: 1, video: saasVideo1, title: "SaaS - Projeto 1" },
      { id: 2, video: saasVideo2, title: "SaaS - Projeto 2" },
      { id: 3, video: saasVideo3, title: "SaaS - Projeto 3" }
    ],
    gateway: [
      { id: 1, video: gatewayVideo1, title: "Gateway - Projeto 1" },
      { id: 2, video: gatewayVideo2, title: "Gateway - Projeto 2" },
      { id: 3, video: gatewayVideo3, title: "Gateway - Projeto 3" }
    ],
    app: [
      { id: 1, video: appVideo1, title: "App - Projeto 1" },
      { id: 2, video: appVideo2, title: "App - Projeto 2" },
      { id: 3, video: appVideo3, title: "App - Projeto 3" }
    ],
    infoproduto: [
      { id: 1, video: infoprodutoVideo1, title: "Curso - Projeto 1" },
      { id: 2, video: infoprodutoVideo2, title: "Lançamento - Projeto 2" },
      { id: 3, video: infoprodutoVideo3, title: "Conteúdo - Projeto 3" }
    ],
    agency: [
      { id: 1, video: agencyVideo1, title: "Agência - Projeto 1" },
      { id: 2, video: agencyVideo2, title: "Agência - Projeto 2" },
      { id: 3, video: agencyVideo3, title: "Agência - Projeto 3" }
    ]
  };

  return (
    <section id="portfolio" className="py-24 bg-[#02000d]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Portfólio em Movimento</h2>

          <div className="flex flex-wrap justify-center gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border border-transparent",
                  activeTab === tab.id
                    ? "bg-cyan-600 text-white shadow-[0_0_15px_rgba(8,145,178,0.4)] border-cyan-400/50"
                    : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border-white/5"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <AnimatePresence mode='wait'>
            {motions[activeTab] ? motions[activeTab].map((item, index) => (
              <motion.div
                key={`${activeTab}-${item.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl hover:border-cyan-500/30 transition-colors"
              >
                <iframe
                  src={item.video}
                  className="w-full h-full"
                  allow="autoplay"
                  allowFullScreen
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white font-medium text-lg">{item.title}</h3>
                </div>
              </motion.div>
            )) : null}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const DesignShowcase = () => {
  const designImages = [
    designImage1,
    designImage2,
    designImage3,
    designImage4,
    designImage5,
    designImage6
  ];

  return (
    <section className="py-24 bg-[#02000d]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Conteúdo Visual Estratégico</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Design em imagem focado em branding e posicionamento de marca.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-20">
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {designImages.slice(0, 3).map((img, idx) => (
                  <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden">
                    <img
                      src={img}
                      alt={`Design estratégico ${idx + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={logo1}
                  alt="Logo Sharkpay"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-gray-400 text-center max-w-3xl mx-auto">
              A Shake Pay confiou à Edit Master o posicionamento estratégico da sua marca no Instagram.
              Desenvolvemos conteúdos alinhados a branding, comunicação e percepção de valor no mercado.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {designImages.slice(3, 6).map((img, idx) => (
                  <div key={idx + 3} className="relative aspect-square rounded-2xl overflow-hidden">
                    <img
                      src={img}
                      alt={`Design estratégico ${idx + 4}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center">
                <img
                  src={logo2}
                  alt="Logo Rapidyn"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-gray-400 text-center max-w-3xl mx-auto">
              A Edit Master conduziu o posicionamento digital da Rapdyn, criando conteúdos alinhados a branding, estratégia e autoridade de marca.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ClientFeedback = () => {
  const feedbacks = [
    {
      id: 1,
      name: "Cliente 1",
      role: "Feedback",
      quote: "Cara, muito bom o atendimento da Edit Master...",
      audio: '/audios/feedback1.mp3'
    },
    {
      id: 2,
      name: "Cliente 2",
      role: "Feedback",
      quote: "...Tô passando aqui para te agradecer pelos criativos... Cara, assim, sensacionais!",
      audio: '/audios/feedback2.mp3'
    },
    {
      id: 3,
      name: "Cliente 3",
      role: "Feedback",
      quote: "Serviço de ultra qualidade...Agora estou pegando um por dia",
      audio: '/audios/feedback3.mp3'
    }
  ];

  const handleWhatsAppClick = () => {
    trackMetaEvent('Lead', {
      content_name: 'Client Feedback Quero Resultados',
      content_category: 'Conversion'
    });
    window.open(getWhatsAppLink(), '_blank');
  };

  return (
    <section id="feedbacks" className="py-24 bg-gradient-to-b from-[#02000d] to-[#0f172a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-900/10 backdrop-blur-sm mb-4">
            <Mic className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-medium text-cyan-200 tracking-wide uppercase">Áudios Reais</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O que nossos clientes dizem</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ouça o feedback de quem já transformou seus resultados com a Edit Master.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {feedbacks.map((feedback, idx) => (
            <motion.div
              key={feedback.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <AudioPlayer
                src={feedback.audio}
                name={feedback.name}
                role={feedback.role}
                quote={feedback.quote}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <MagicButton
            onClick={handleWhatsAppClick}
            eventName="Lead"
            eventData={{
              content_name: 'Client Feedback Button',
              content_category: 'Conversion'
            }}
          >
            <span className="flex items-center gap-2">
              Quero resultados também <ArrowRight size={16} />
            </span>
          </MagicButton>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      id: "01",
      title: "Copywriting & Estratégia",
      desc: "Desenvolvemos o roteiro focado em clareza, conversão e autoridade.",
      icon: <Zap className="w-6 h-6 text-cyan-400" />
    },
    {
      id: "02",
      title: "Motion Design",
      desc: "Animações fluidas que garantem retenção, estética e posicionamento.",
      icon: <Layers className="w-6 h-6 text-blue-500" />
    },
    {
      id: "03",
      title: "Design em imagem",
      desc: "Construção visual que eleva a percepção de valor da sua marca.",
      icon: <CheckCircle2 className="w-6 h-6 text-cyan-300" />
    },
    {
      id: "04",
      title: "Edição Estratégica",
      desc: "Cortes precisos, narrativa envolvente e ritmo perfeito para o digital.",
      icon: <Play className="w-6 h-6 text-blue-400" />
    }
  ];

  return (
    <section id="servicos" className="py-24 relative overflow-hidden bg-[#020617]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-600/5 blur-[100px] -z-10 rounded-full"></div>

      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">O que a Edit Master entrega</h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Profissionais especializados e um processo criativo estruturado para produzir conteúdo de alta performance, pensado para percepção, posicionamento e conversão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass border border-white/5 bg-white/[0.02] p-8 rounded-2xl relative overflow-hidden group min-h-[300px] flex flex-col justify-between hover:border-cyan-500/30 transition-colors"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                    {service.icon}
                  </div>
                  <span className="text-4xl font-bold text-white/5 group-hover:text-white/10 transition-colors">{service.id}</span>
                </div>

                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </div>

              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyan-500/10 blur-[50px] group-hover:bg-cyan-500/20 transition-all rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Quais são os prazos para entrega dos conteúdos?",
      answer: "Os prazos variam conforme o nível de complexidade e a quantidade de conteúdos solicitados. Cada projeto recebe um planejamento personalizado para garantir qualidade máxima. Entre em contato com nossa equipe para que possamos orientar corretamente e informar todos os prazos de entrega."
    },
    {
      question: "Como é feita a comunicação durante o projeto?",
      answer: "Assim que iniciamos o projeto, enviamos um questionário estratégico para entender profundamente sua operação, público e mercado. Com essas informações, desenvolvemos a copy do vídeo, que fica pronta, em média, em até 24 horas. Após sua revisão e aprovação (com ajustes, se necessário), iniciamos o processo de edição, motion e finalização, mantendo contato direto durante toda a produção para garantir alinhamento total."
    },
    {
      question: "Vocês fazem alterações caso eu queira ajustar alguma parte?",
      answer: "Sim. Caso exista qualquer ponto que você queira ajustar, realizamos as alterações necessárias até que o conteúdo fique exatamente como desejado. Nosso foco é entregar uma peça alinhada ao seu posicionamento e ao padrão de qualidade da Edit Master."
    },
    {
      question: "Vocês produzem para o meu nicho?",
      answer: "Sim. Atuamos em diversos segmentos do digital, como e-commerce, SaaS, gateways de pagamento, infoprodutos, dropshipping, IPTV, entre outros. Temos estrutura e experiência para produzir conteúdo estratégico independentemente do nicho."
    },
    {
      question: "Vocês editam vídeos com expert?",
      answer: "Sim. Editamos vídeos com expert e aplicamos nossa linha editorial profissional para elevar a percepção, clareza e posicionamento do especialista."
    },
    {
      question: "O conteúdo é criado totalmente do zero?",
      answer: "Sim. Todo o conteúdo é desenvolvido do zero, seguindo suas referências, identidade visual, tom de comunicação e estratégia. Nada é genérico — tudo é pensado especificamente para o seu público e para gerar conversão."
    },
    {
      question: "Vocês atendem empresas fora do Brasil?",
      answer: "Sim. Atendemos empresas internacionais e produzimos criativos em outros idiomas, mantendo o mesmo padrão de qualidade e estratégia aplicado aos projetos nacionais."
    }
  ];

  const handleWhatsAppClick = () => {
    trackMetaEvent('Contact', {
      content_name: 'FAQ Falar no WhatsApp',
      content_category: 'Contact'
    });
    window.open(getWhatsAppLink(), '_blank');
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#020617]">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[120px] -z-10 rounded-full"></div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Perguntas Frequentes</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tudo o que você precisa saber sobre nosso processo, prazos e forma de trabalho.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex justify-between items-center gap-4">
                  <h3 className="text-lg font-semibold text-white pr-4 group-hover:text-cyan-400 transition-colors">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 text-gray-300 leading-relaxed border-t border-white/5 mt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">Ainda tem dúvidas? Fale diretamente com nossa equipe.</p>
          <MagicButton
            onClick={handleWhatsAppClick}
            eventName="Contact"
            eventData={{
              content_name: 'FAQ Falar no WhatsApp Button',
              content_category: 'Contact'
            }}
          >
            <span className="flex items-center gap-2">
              Falar no WhatsApp <ArrowRight size={16} />
            </span>
          </MagicButton>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/5 bg-[#02000d]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Edit Master. Todos os direitos reservados.
        </div>
        <div className="text-gray-500 text-sm font-medium">
          Desenvolvido por <span className="text-cyan-500 hover:text-white transition-colors cursor-pointer">@riquelme.dev</span>
        </div>
      </div>
    </footer>
  );
};

function App() {
  useEffect(() => {
    initializeMetaPixel();

    trackMetaEvent('PageView');
  }, []);

  return (
    <div className="bg-[#02000d] min-h-screen text-white selection:bg-cyan-500/30 selection:text-cyan-200 font-sans">
      <StarField />
      <Navbar />
      <Hero />
      <About />
      <MotionShowcase />
      <DesignShowcase />
      <ClientFeedback />
      <Services />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;