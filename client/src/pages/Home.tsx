/*
  Direção visual desta página: Editorial de Comunidade com assinatura IBIG.
  Vermelho vivo, preto, dourado e marfim; fotografia documental; composição assimétrica;
  textos curtos, humanos e claros; interações rápidas sem banco de dados.
*/

import { FormEvent, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  ChevronRight,
  Clock3,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Music2,
  Play,
  Send,
  Sparkles,
  UsersRound,
  X,
} from "lucide-react";
import { toast } from "sonner";

const photos = {
  community: "/manus-storage/comunidade-ibig_1ce957e3.jpeg",
  worship: "/manus-storage/louvor-ibig_3e5793f6.jpeg",
  youth: "/manus-storage/jovens-ibig_edd035f9.jpeg",
  outreach: "/manus-storage/minibig-acao-ibig_128a041f.jpeg",
  children: "/manus-storage/minibig-comunidade-ibig_fde17cfe.jpeg",
};

const officialLogo = "/manus-storage/igreja-logo-oficial-branca-transparente_f0fdd8c1.png";

const whatsappMessage = encodeURIComponent(
  "Olá! Vim pelo site da Igreja Batista Independente de Guarulhos e gostaria de saber mais."
);
const whatsappHref = `https://wa.me/?text=${whatsappMessage}`;

const schedule = [
  { day: "DOM", title: "Escola Bíblica Dominical", time: "09:30", detail: "EBD para toda a família" },
  { day: "DOM", title: "Culto da família", time: "18:30", detail: "Oração, palavra e louvor" },
  { day: "TER", title: "Encontros de oração e palavra", time: "08:00 · 20:00", detail: "Dois horários para estar junto" },
  { day: "QUA", title: "Círculo de oração", time: "15:00", detail: "Um tempo de cuidado e intercessão" },
  { day: "QUI", title: "Culto de oração e palavra", time: "20:00", detail: "Rua Augusto Calheiros, 124" },
  { day: "SÁB", title: "Jovens & Adolescentes", time: "17:00", detail: "Conversa, música e comunhão" },
];

const ministries = [
  { title: "Ministério de Louvor", eyebrow: "Servir com música", text: "Música, presença e serviço para conduzir a comunidade a celebrar e adorar juntos.", image: photos.worship, tone: "gold" },
  { title: "Jovens & Adoles", eyebrow: "Uma fé que se move", text: "Encontros com conversa, música, amizade e espaço para viver a fé no cotidiano.", image: photos.youth, tone: "dark" },
  { title: "MINIBIG", eyebrow: "Para os pequenos", text: "Cuidado, alegria e histórias que ajudam crianças e famílias a pertencer.", image: photos.outreach, tone: "red" },
  { title: "EBD", eyebrow: "Aprender juntos", text: "Um espaço para crescer na Palavra, fazer perguntas e caminhar em comunidade.", image: null, tone: "paper" },
];

function OfficialLogo({ className = "" }: { className?: string }) {
  return <img className={`official-logo ${className}`} src={officialLogo} alt="IBIG — Igreja Batista Independente de Guarulhos" />;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", message: "" });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = encodeURIComponent(
      `Olá! Meu nome é ${formData.name}. Gostaria de enviar uma mensagem pelo site da IBIG:\n\n${formData.message}`
    );
    window.open(`https://wa.me/?text=${text}`, "_blank", "noopener,noreferrer");
    toast.success("Mensagem preparada para o WhatsApp.");
  }

  function scrollTo(id: string) {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#inicio" onClick={() => scrollTo("inicio")} aria-label="IBIG — voltar ao início">
          <OfficialLogo className="official-logo--header" />
        </a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`main-nav ${menuOpen ? "main-nav--open" : ""}`} aria-label="Navegação principal">
          <button onClick={() => scrollTo("encontros")}>Encontros</button>
          <button onClick={() => scrollTo("ministerios")}>Ministérios</button>
          <button onClick={() => scrollTo("historia")}>Nossa igreja</button>
          <button onClick={() => scrollTo("contato")}>Contato</button>
          <a className="nav-cta" href={whatsappHref} target="_blank" rel="noreferrer"><MessageCircle size={16} /> Falar com a gente</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero__copy">
            <p className="kicker"><span /> Igreja Batista Independente de Guarulhos</p>
            <h1>Há um lugar<br /><em>à mesa</em> para você.</h1>
            <p className="hero__lead">Uma comunidade para encontrar Deus, construir amizades e caminhar junto — em todos os momentos da vida.</p>
            <div className="hero__actions">
              <button className="button button--red" onClick={() => scrollTo("encontros")}>Ver próximos encontros <ArrowUpRight size={18} /></button>
              <button className="text-link" onClick={() => scrollTo("historia")}>Conhecer a IBIG <ChevronRight size={17} /></button>
            </div>
            <div className="hero__meta"><span><MapPin size={15} /> Guarulhos, SP</span><span><Sparkles size={15} /> Desde 1986</span></div>
          </div>
          <div className="hero__visual">
            <div className="hero__image-wrap"><img src={photos.community} alt="Grupo de pessoas reunidas dentro da igreja" /><div className="hero__image-note">Comunidade<br /><strong>em movimento</strong></div></div>
            <div className="hero__stamp"><span className="hero__cross" aria-hidden="true">✝</span><span>Vem<br />como<br /><strong>você é</strong></span></div>
            <div className="hero__number">01 / 05</div>
          </div>
          <div className="hero__aside"><span>Próximo encontro</span><strong>DOM 18:30</strong><small>Culto da família<br />com oração e palavra</small><button onClick={() => scrollTo("encontros")} aria-label="Ver agenda"><ArrowDownRight size={24} /></button></div>
        </section>

        <section className="statement" id="historia">
          <div className="section-label"><span>01</span><span>Uma comunidade presente</span></div>
          <div className="statement__grid"><h2>Fé que se encontra<br /><em>com a vida real.</em></h2><div><p>Na IBIG, a gente acredita que igreja é mais do que um lugar. É gente que se reúne para celebrar, aprender, orar, servir e abrir espaço para novas histórias.</p><button className="text-link text-link--dark" onClick={() => toast.info("A página completa sobre a história da IBIG será construída com o material da igreja.")}>Conheça nossa história <ArrowUpRight size={17} /></button></div></div>
          <div className="statement__photo"><img src={photos.children} alt="Crianças, adolescentes e famílias participando de uma ação comunitária" /><div className="statement__photo-caption"><span>Fé que sai das paredes</span><strong>Presença no bairro, cuidado com as pessoas.</strong></div></div>
        </section>

        <section className="schedule-section" id="encontros">
          <div className="section-heading"><div><p className="kicker"><span /> Toda semana</p><h2>Um tempo para<br /><em>estar junto.</em></h2></div><p className="section-heading__note">Escolha um encontro, chegue como está e encontre uma comunidade pronta para receber você.</p></div>
          <div className="schedule-list">{schedule.map((item, index) => <article className="schedule-item" key={`${item.day}-${item.title}`}><span className="schedule-item__index">0{index + 1}</span><span className="schedule-item__day">{item.day}</span><div className="schedule-item__main"><h3>{item.title}</h3><p>{item.detail}</p></div><strong className="schedule-item__time"><Clock3 size={16} /> {item.time}</strong><ArrowUpRight className="schedule-item__arrow" size={21} /></article>)}</div>
          <div className="schedule-footer"><span><MapPin size={16} /> R. Augusto Calheiros, 124 — Guarulhos</span><a href="https://www.google.com/maps/search/?api=1&query=R.+Augusto+Calheiros+124+Guarulhos" target="_blank" rel="noreferrer">Como chegar <ArrowUpRight size={15} /></a></div>
        </section>

        <section className="ministries-section" id="ministerios">
          <div className="section-heading section-heading--light"><div><p className="kicker"><span /> Gente de todas as idades</p><h2>Tem espaço<br /><em>para todo mundo.</em></h2></div><p className="section-heading__note">Cada frente tem seu jeito de acolher, servir e construir vínculos. Descubra onde você se sente em casa.</p></div>
          <div className="ministry-grid">{ministries.map((ministry, index) => <article className={`ministry-card ministry-card--${ministry.tone}`} key={ministry.title}><span className="ministry-card__number">0{index + 1} / IBIG</span>{ministry.image ? <div className="ministry-card__image"><img src={ministry.image} alt="" /><span className="ministry-card__play"><Play size={14} fill="currentColor" /></span></div> : <div className="ministry-card__image ministry-card__image--empty"><span>Foto da EBD<br /><strong>em breve</strong></span></div>}<div className="ministry-card__copy"><p>{ministry.eyebrow}</p><h3>{ministry.title}</h3><span>{ministry.text}</span><button onClick={() => toast.info(`Em breve: mais informações sobre ${ministry.title}.`)} aria-label={`Saiba mais sobre ${ministry.title}`}><ArrowUpRight size={18} /></button></div></article>)}</div>
        </section>

        <section className="gallery-section">
          <div className="section-label"><span>03</span><span>Um pouco do que vivemos</span></div>
          <div className="gallery-grid"><div className="gallery-grid__large"><img src={photos.worship} alt="Equipe de louvor durante o culto" /><span>Louvor é resposta.<br /><strong>É presença.</strong></span></div><div className="gallery-grid__small gallery-grid__small--one"><img src={photos.youth} alt="Grupo de jovens reunidos no templo" /></div><div className="gallery-grid__small gallery-grid__small--two"><img src={photos.children} alt="Famílias e crianças reunidas na igreja" /><span>Histórias<br /><strong>que continuam</strong></span></div></div>
          <div className="gallery-footer"><p>Registros reais, encontros reais.<br /><em>É assim que a IBIG acontece.</em></p><a href="https://www.instagram.com/ibigru/" target="_blank" rel="noreferrer"><Instagram size={19} /> Acompanhe no Instagram <ArrowUpRight size={16} /></a></div>
        </section>

        <section className="contact-section" id="contato">
          <div className="contact-section__intro"><p className="kicker"><span /> Fale com a igreja</p><h2>Você não precisa<br /><em>chegar sozinho.</em></h2><p>Quer saber mais, pedir uma oração ou conversar com alguém da IBIG? Escreva para nós. A mensagem será aberta no WhatsApp, sem ser armazenada no site.</p><div className="contact-details"><span><MessageCircle size={17} /> WhatsApp</span><span><MapPin size={17} /> Guarulhos, SP</span></div></div>
          <form className="contact-form" onSubmit={handleSubmit}><label>Seu nome<input required value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} placeholder="Como podemos chamar você?" /></label><label>Mensagem<textarea required rows={4} value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} placeholder="Escreva sua mensagem ou pedido de oração..." /></label><button className="button button--gold" type="submit">Abrir conversa no WhatsApp <Send size={17} /></button><small>O formulário não salva dados. Ele apenas prepara a mensagem no seu WhatsApp.</small></form>
        </section>
      </main>

      <footer className="site-footer"><div className="footer-brand"><OfficialLogo className="official-logo--footer" /><div><strong>IBIG</strong><span>Igreja Batista Independente<br />de Guarulhos</span></div></div><div className="footer-middle"><p>Há um lugar à mesa para você.</p><span>R. Augusto Calheiros, 124 — Guarulhos, SP</span></div><div className="footer-links"><a href="https://www.instagram.com/ibigru/" target="_blank" rel="noreferrer"><Instagram size={17} /> Instagram</a><a href={whatsappHref} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} IBIG</span><span>Feito para uma comunidade viva.</span></div></footer>
      <a className="floating-whatsapp" href={whatsappHref} target="_blank" rel="noreferrer" aria-label="Abrir WhatsApp"><MessageCircle size={23} /></a>
    </div>
  );
}
