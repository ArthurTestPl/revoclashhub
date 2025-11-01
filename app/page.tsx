import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Trophy, Zap, Shield, Users, Smartphone, Clock, CheckCircle2, Star } from "lucide-react"

export default function RevoClashLanding() {
  return (
    <div className="min-h-screen bg-black text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Trophy className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold tracking-tight">REVOCLASH</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#como-funciona" className="text-sm hover:text-primary transition-colors">
              Como Funciona
            </a>
            <a href="#premios" className="text-sm hover:text-primary transition-colors">
              Prêmios
            </a>
            <a href="#faq" className="text-sm hover:text-primary transition-colors">
              FAQ
            </a>
          </nav>
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            Entrar
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/50 text-sm px-4 py-1">
              +18 ANOS • PLATAFORMA SEGURA
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-balance leading-tight">
              DOMINE OS TORNEIOS
              <span className="block text-primary">GANHE PRÊMIOS REAIS</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 text-pretty max-w-2xl mx-auto">
              Crie e participe de torneios mobile pagos. Duelos 1v1, pagamentos via PIX, saques instantâneos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 font-bold"
              >
                <Trophy className="mr-2 h-5 w-5" />
                Criar Torneio
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 font-bold bg-transparent"
              >
                <Zap className="mr-2 h-5 w-5" />
                Participar Agora
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Pagamentos via PIX</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Saques Seguros</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Moderação 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="como-funciona" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-balance">
              COMO <span className="text-primary">FUNCIONA</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Três passos simples para começar a competir e ganhar
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-black text-primary">1</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Escolha o Modo</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Crie um torneio com múltiplos jogadores ou desafie alguém em um duelo 1v1
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-black text-primary">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Pague via PIX</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Deposite sua entrada de forma rápida e segura usando PIX instantâneo
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border hover:border-primary transition-colors">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-black text-primary">3</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Jogue e Ganhe</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Compete, vença e receba seus prêmios direto na sua conta
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prizes and Formats */}
      <section id="premios" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-balance">
              PRÊMIOS E <span className="text-primary">FORMATOS</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Escolha o formato que mais combina com você
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Tournament Format */}
            <Card className="bg-gradient-to-br from-primary/10 to-card border-primary/50">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Trophy className="h-8 w-8 text-primary" />
                  <h3 className="text-3xl font-black">TORNEIO</h3>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Jogadores:</span>
                    <span className="font-bold text-xl">50 players</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Entrada:</span>
                    <span className="font-bold text-xl text-primary">R$ 2,00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Prize Pool:</span>
                    <span className="font-bold text-2xl text-primary">R$ 100,00</span>
                  </div>
                </div>
                <div className="border-t border-border pt-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                      <span className="font-bold">1º Lugar</span>
                    </div>
                    <span className="text-2xl font-black text-primary">R$ 50</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-gray-400 fill-gray-400" />
                      <span className="font-bold">2º Lugar</span>
                    </div>
                    <span className="text-xl font-bold text-primary">R$ 35</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-orange-600 fill-orange-600" />
                      <span className="font-bold">3º Lugar</span>
                    </div>
                    <span className="text-xl font-bold text-primary">R$ 15</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Duel Format */}
            <Card className="bg-gradient-to-br from-accent/10 to-card border-accent/50">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-center gap-3 mb-6">
                  <Zap className="h-8 w-8 text-accent" />
                  <h3 className="text-3xl font-black">DUELO 1v1</h3>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Jogadores:</span>
                    <span className="font-bold text-xl">2 players</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Aposta:</span>
                    <span className="font-bold text-xl text-accent">R$ 5,00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Prize Pool:</span>
                    <span className="font-bold text-2xl text-accent">R$ 10,00</span>
                  </div>
                </div>
                <div className="border-t border-border pt-6">
                  <div className="bg-accent/20 rounded-lg p-6 text-center">
                    <p className="text-sm text-muted-foreground mb-2">Vencedor Leva</p>
                    <p className="text-4xl font-black text-accent">2x</p>
                    <p className="text-sm text-muted-foreground mt-2">O valor apostado</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>Partidas rápidas e intensas</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Mobile */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 text-balance">
                  POR QUE <span className="text-primary">MOBILE?</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  O mercado de jogos mobile é o mais competitivo e acessível do Brasil. Milhões de jogadores, mas poucas
                  plataformas de torneios profissionais.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Smartphone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Nicho Inexplorado</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Focamos em jogos mobile competitivos que não possuem APIs oficiais
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Engenharia Reversa</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Desenvolvemos tecnologia própria para validar resultados e prevenir fraudes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold mb-1">Comunidade Ativa</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Milhares de jogadores competitivos buscando oportunidades de monetização
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center">
                  <Smartphone className="h-48 w-48 text-primary/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-balance">
              POR QUE <span className="text-primary">REVOCLASH?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card border-border text-center">
              <CardContent className="pt-8 pb-8">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Rápido</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Pagamentos via PIX instantâneos. Saques processados em minutos.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border text-center">
              <CardContent className="pt-8 pb-8">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Seguro</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Sistema anti-fraude, moderação 24/7 e validação automática de resultados.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border text-center">
              <CardContent className="pt-8 pb-8">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Comunidade</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Conecte-se com milhares de jogadores competitivos do Brasil.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-balance">
              O QUE DIZEM OS <span className="text-primary">JOGADORES</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-card border-border">
              <CardContent className="pt-6 pb-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "Finalmente uma plataforma séria para competir mobile. Já ganhei mais de R$ 500 em torneios!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-bold text-primary">LG</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm">Lucas Gamer</p>
                    <p className="text-xs text-muted-foreground">São Paulo, SP</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="pt-6 pb-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "Os duelos 1v1 são viciantes! Pagamento via PIX é instantâneo, sem burocracia."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-bold text-primary">MS</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm">Mariana Silva</p>
                    <p className="text-xs text-muted-foreground">Rio de Janeiro, RJ</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card border-border">
              <CardContent className="pt-6 pb-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  "Moderação eficiente e sistema anti-fraude funcionam. Me sinto seguro competindo aqui."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-bold text-primary">RC</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm">Rafael Costa</p>
                    <p className="text-xs text-muted-foreground">Belo Horizonte, MG</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-balance">
                PERGUNTAS <span className="text-primary">FREQUENTES</span>
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left font-bold hover:text-primary">
                  Como funciona o pagamento via PIX?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Ao criar ou participar de um torneio, você recebe um QR Code PIX para pagamento instantâneo. O valor é
                  creditado imediatamente e você pode começar a jogar.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left font-bold hover:text-primary">
                  Como recebo meus prêmios?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Os prêmios são creditados automaticamente na sua carteira RevoClash após a validação dos resultados.
                  Você pode solicitar saque via PIX a qualquer momento, com processamento em até 24 horas.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left font-bold hover:text-primary">
                  Quais jogos são suportados?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Atualmente suportamos os principais títulos mobile competitivos do Brasil. A lista completa está
                  disponível após o cadastro. Estamos constantemente adicionando novos jogos.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left font-bold hover:text-primary">
                  Como funciona a validação de resultados?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Utilizamos tecnologia de engenharia reversa e validação automática de screenshots. Em casos de
                  disputa, nossa equipe de moderação analisa as evidências em até 2 horas.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left font-bold hover:text-primary">
                  Preciso ter 18 anos?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Sim, a plataforma é restrita para maiores de 18 anos devido à natureza de apostas e prêmios em
                  dinheiro. Validamos a idade durante o cadastro.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="border border-border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left font-bold hover:text-primary">
                  A plataforma é segura?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Sim! Utilizamos criptografia de ponta a ponta, sistema anti-fraude, moderação 24/7 e seguimos todas as
                  regulamentações brasileiras para jogos competitivos com prêmios.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-primary/20 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-balance">
              PRONTO PARA <span className="text-primary">DOMINAR?</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 text-pretty">
              Junte-se a milhares de jogadores competitivos e comece a ganhar hoje mesmo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 font-bold"
              >
                <Trophy className="mr-2 h-5 w-5" />
                Começar Agora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">REVOCLASH</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A maior plataforma de torneios mobile do Brasil
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Plataforma</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Como Funciona
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Torneios
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Duelos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Rankings
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Regras de Conduta
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Jogo Responsável
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Redes Sociais</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 RevoClash. Todos os direitos reservados.</p>
            <p className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Plataforma segura e regulamentada • +18 anos
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
