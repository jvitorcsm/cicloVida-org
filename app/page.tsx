import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Recycle,
  Award,
  Users,
  Target,
  CheckCircle,
  Smartphone,
  Camera,
  Calendar,
  Gift,
  MapPin,
  Scan,
  Trophy,
  CreditCard,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Recycle className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-primary">CicloVida</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#app" className="text-foreground hover:text-primary transition-colors">
              App
            </a>
            <a href="#lixeiras" className="text-foreground hover:text-primary transition-colors">
              Lixeiras
            </a>
            <a href="#beneficios" className="text-foreground hover:text-primary transition-colors">
              Benefícios
            </a>
            <a href="#selo" className="text-foreground hover:text-primary transition-colors">
              Selo B2B
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90">Baixar App</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-card/30 to-background">
        <div className="container mx-auto max-w-4xl">
          <Badge className="mb-6 bg-accent/20 text-accent-foreground border-accent">🌱 Rumo ao Lixo Zero</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Transformando o Mundo Através da
            <span className="text-primary"> Reciclagem</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            CicloVida é mais que um projeto - é um movimento global para conscientizar sobre reciclagem e alcançar a
            meta de lixo zero através de práticas sustentáveis e tecnologia inovadora.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Smartphone className="mr-2 h-5 w-5" />
              Baixar App Grátis
            </Button>
            <Button size="lg" variant="outline">
              <Award className="mr-2 h-5 w-5" />
              Obter Selo B2B
            </Button>
          </div>
        </div>
      </section>

      {/* App Section */}
      <section id="app" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">App CicloVida</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Agende coletas, identifique materiais recicláveis e ganhe recompensas pelo seu impacto ambiental
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* App Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-900 to-slate-700 rounded-3xl p-2 shadow-2xl max-w-sm mx-auto">
                <div className="bg-background rounded-2xl overflow-hidden">
                  {/* Phone Header */}
                  <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Recycle className="h-6 w-6" />
                      <span className="font-bold">CicloVida</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="p-4 space-y-4">
                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-3">
                      <Card className="p-3 text-center">
                        <Camera className="h-8 w-8 text-primary mx-auto mb-2" />
                        <p className="text-sm font-medium">Identificar Item</p>
                      </Card>
                      <Card className="p-3 text-center">
                        <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                        <p className="text-sm font-medium">Agendar Coleta</p>
                      </Card>
                    </div>

                    {/* Camera Preview */}
                    <Card className="p-4">
                      <div className="bg-muted rounded-lg h-32 flex items-center justify-center mb-3">
                        <div className="text-center">
                          <Scan className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">Aponte a câmera para o item</p>
                        </div>
                      </div>
                      <div className="bg-green-100 border border-green-300 rounded-lg p-3">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <div>
                            <p className="text-sm font-medium text-green-800">Garrafa PET identificada!</p>
                            <p className="text-xs text-green-600">Lixeira: Vermelha (Plástico)</p>
                          </div>
                        </div>
                      </div>
                    </Card>

                    {/* Rewards */}
                    <Card className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-medium">Suas Recompensas</h3>
                        <Trophy className="h-5 w-5 text-yellow-500" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Pontos acumulados</span>
                          <Badge variant="secondary">1,250 pts</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm">Cupons disponíveis</span>
                          <Badge className="bg-green-100 text-green-800">3 cupons</Badge>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Funcionalidades do App</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Camera className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Identificação Inteligente</h4>
                      <p className="text-muted-foreground">
                        Use a câmera para identificar automaticamente se um item é reciclável e para qual lixeira deve
                        ir.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Agendamento de Coleta</h4>
                      <p className="text-muted-foreground">
                        Agende coletas seletivas para sua casa ou empresa de forma rápida e conveniente.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Pontos de Coleta</h4>
                      <p className="text-muted-foreground">
                        Encontre pontos de coleta seletiva próximos à sua localização.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Gift className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Sistema de Recompensas</h4>
                      <p className="text-muted-foreground">
                        Ganhe pontos e cupons de desconto por cada ação sustentável realizada.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossa Missão</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conscientizar o mundo sobre a importância da reciclagem e criar um futuro sustentável
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Lixo Zero</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Nossa meta é alcançar um mundo com zero desperdício através de práticas conscientes de reciclagem.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Conscientização</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Educamos empresas e indivíduos sobre a importância da separação correta de resíduos.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Certificação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Oferecemos selo de certificação para empresas comprometidas com práticas sustentáveis.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lixeiras Section */}
      <section id="lixeiras" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tipos de Lixeiras</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conheça as cores e tipos corretos de separação de resíduos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Azul - Papel */}
            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                  <CardTitle className="text-blue-700">Azul - Papel</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">Para materiais de papel e papelão</CardDescription>
                <ul className="text-sm space-y-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Jornais e revistas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Caixas de papelão
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Papel de escritório
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Verde - Vidro */}
            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                  <CardTitle className="text-green-700">Verde - Vidro</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">Para materiais de vidro</CardDescription>
                <ul className="text-sm space-y-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Garrafas de vidro
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Potes e frascos
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Cacos de vidro
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Vermelho - Plástico */}
            <Card className="border-l-4 border-l-red-500">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                  <CardTitle className="text-red-700">Vermelho - Plástico</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">Para materiais plásticos</CardDescription>
                <ul className="text-sm space-y-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Garrafas PET
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Embalagens plásticas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Sacolas plásticas
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Amarelo - Metal */}
            <Card className="border-l-4 border-l-yellow-500">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                  <CardTitle className="text-yellow-700">Amarelo - Metal</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">Para materiais metálicos</CardDescription>
                <ul className="text-sm space-y-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Latas de alumínio
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Latas de aço
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Tampas metálicas
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Marrom - Orgânico */}
            <Card className="border-l-4 border-l-amber-600">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-amber-600 rounded-full"></div>
                  <CardTitle className="text-amber-700">Marrom - Orgânico</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">Para resíduos orgânicos</CardDescription>
                <ul className="text-sm space-y-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Restos de comida
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Cascas de frutas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Folhas e galhos
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Preto - Rejeitos */}
            <Card className="border-l-4 border-l-gray-800">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
                  <CardTitle className="text-gray-700">Preto - Rejeitos</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">Para materiais não recicláveis</CardDescription>
                <ul className="text-sm space-y-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Papel higiênico usado
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Fraldas descartáveis
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Materiais contaminados
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section id="beneficios" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefícios e Impacto Social</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transforme suas ações sustentáveis em benefícios reais para empresas e funcionários
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Benefícios para Empresas */}
            <Card className="p-8">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Benefícios para Empresas</CardTitle>
                <CardDescription>Incentivos fiscais e vantagens competitivas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Redução de Impostos</h4>
                    <p className="text-sm text-muted-foreground">
                      Até 15% de desconto em impostos municipais para empresas certificadas
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Certificação ESG</h4>
                    <p className="text-sm text-muted-foreground">
                      Melhore seus indicadores ambientais e atraia investidores conscientes
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Marketing Verde</h4>
                    <p className="text-sm text-muted-foreground">
                      Use nosso selo em suas campanhas e demonstre compromisso ambiental
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Relatórios de Impacto</h4>
                    <p className="text-sm text-muted-foreground">
                      Receba relatórios detalhados do impacto ambiental da sua empresa
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefícios para Funcionários */}
            <Card className="p-8">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Recompensas para Funcionários</CardTitle>
                <CardDescription>Sistema de pontos e prêmios exclusivos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Cupons de Desconto</h4>
                    <p className="text-sm text-muted-foreground">
                      Descontos cumulativos em lojas parceiras (até 50% off)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Viagens Premiadas</h4>
                    <p className="text-sm text-muted-foreground">
                      Concorra a viagens nacionais e internacionais com tudo pago
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Sistema de Pontos</h4>
                    <p className="text-sm text-muted-foreground">
                      Acumule pontos por cada ação sustentável e troque por prêmios
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Ranking Gamificado</h4>
                    <p className="text-sm text-muted-foreground">
                      Competa com colegas e ganhe badges especiais por conquistas
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Impacto Social */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8">Nosso Impacto Social</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <p className="text-sm text-muted-foreground">Empresas Certificadas</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">10k+</div>
                <p className="text-sm text-muted-foreground">Funcionários Engajados</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">500t</div>
                <p className="text-sm text-muted-foreground">Resíduos Reciclados</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">R$ 2M</div>
                <p className="text-sm text-muted-foreground">Em Benefícios Distribuídos</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Selo B2B Section */}
      <section id="selo" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Selo CicloVida B2B</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Demonstre o compromisso da sua empresa com a sustentabilidade através do nosso selo de certificação
          </p>

          <Card className="max-w-md mx-auto mb-8">
            <CardHeader className="text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="text-2xl">Selo Certificado</CardTitle>
              <CardDescription>Empresa Comprometida com o Meio Ambiente</CardDescription>
            </CardHeader>
            <CardContent>
              <Badge className="w-full py-2 bg-accent/20 text-accent-foreground border-accent">
                ✓ Certificado CicloVida
              </Badge>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-xl font-semibold mb-4">Benefícios do Selo:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Reconhecimento público do compromisso ambiental
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Diferencial competitivo no mercado
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Atração de consumidores conscientes
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Melhoria da imagem corporativa
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Requisitos:</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Implementação de coleta seletiva
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Treinamento de funcionários
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Relatórios mensais de reciclagem
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Compromisso com metas de redução
                </li>
              </ul>
            </div>
          </div>

          <Button size="lg" className="mt-8 bg-primary hover:bg-primary/90">
            <Award className="mr-2 h-5 w-5" />
            Solicitar Certificação
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Junte-se ao Movimento CicloVida</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Faça parte da transformação rumo a um mundo mais sustentável. Baixe o app, cadastre sua empresa e comece a
            gerar impacto positivo hoje mesmo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Smartphone className="mr-2 h-5 w-5" />
              Baixar App Grátis
            </Button>
            <Button size="lg" variant="secondary">
              <Users className="mr-2 h-5 w-5" />
              Cadastrar Empresa
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-muted/30 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Recycle className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold text-primary">CicloVida</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Transformando o mundo através da reciclagem e práticas sustentáveis.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navegação</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#sobre" className="text-muted-foreground hover:text-primary">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#app" className="text-muted-foreground hover:text-primary">
                    App
                  </a>
                </li>
                <li>
                  <a href="#lixeiras" className="text-muted-foreground hover:text-primary">
                    Lixeiras
                  </a>
                </li>
                <li>
                  <a href="#beneficios" className="text-muted-foreground hover:text-primary">
                    Benefícios
                  </a>
                </li>
                <li>
                  <a href="#selo" className="text-muted-foreground hover:text-primary">
                    Selo B2B
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Guia de Reciclagem
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Materiais Educativos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>contato@ciclovida.com</li>
                <li>+55 (11) 9999-9999</li>
                <li>São Paulo, SP</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; 2024 CicloVida. Todos os direitos reservados. Construído com 💚 para um mundo mais sustentável.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
