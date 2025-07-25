import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded transform rotate-45"></div>
          <div className="text-2xl font-bold">
            ВАШ<span className="text-yellow-500">ДОМ</span>
          </div>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-yellow-500 transition-colors">Ремонт и отделка</a>
          <a href="#" className="hover:text-yellow-500 transition-colors">Услуги</a>
          <a href="#" className="hover:text-yellow-500 transition-colors">О компании</a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="text-right hidden md:block">
            <div className="text-sm text-gray-400">Пн. - Пт. 10:00 до 19:00</div>
            <div className="text-sm text-gray-400">Сб. 10:00 до 15:00</div>
          </div>
          <div className="text-right">
            <div className="font-bold">+7 (812) 983 33 88</div>
            <div className="font-bold">+7 (929) 187-05-65</div>
            <div className="text-sm text-yellow-500 cursor-pointer">ЗАКАЗАТЬ ЗВОНОК</div>
          </div>
          <div className="flex space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center cursor-pointer">
              <Icon name="Phone" size={16} />
            </div>
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer">
              <Icon name="Send" size={16} />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/img/2711aa10-69f8-492d-adda-d1e80f67b95c.jpg)`,
            filter: 'brightness(0.4)'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Дизайн, ремонт <span className="text-yellow-500">"под ключ"</span>
              <br />и строительные работы с
              <br />гарантией от 5 лет на все
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <Icon name="CheckCircle" className="text-yellow-500 mt-1" size={20} />
                <div>
                  <div className="font-semibold mb-1">Укладываемся в сроки</div>
                  <div className="text-gray-400 text-sm">или платим за каждый день просрочки</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Icon name="CheckCircle" className="text-yellow-500 mt-1" size={20} />
                <div>
                  <div className="font-semibold mb-1">Поэтапная оплата,</div>
                  <div className="text-gray-400 text-sm">заключаем договор</div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Icon name="CheckCircle" className="text-yellow-500 mt-1" size={20} />
                <div>
                  <div className="font-semibold mb-1">Работаем на репутацию,</div>
                  <div className="text-gray-400 text-sm">чтобы вы остались довольны</div>
                </div>
              </div>
            </div>

            <Button className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-black font-bold px-8 py-4 text-lg rounded-lg">Скачать презентацию</Button>
          </div>

          <Card className="bg-black/80 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-2">Скачать презентацию</h3>
              <p className="text-gray-400 mb-6">Задайте вопросы нам онлайн</p>
              
              <form className="space-y-4">
                <Input 
                  placeholder="Ваше имя" 
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                />
                <Input 
                  placeholder="Номер телефона" 
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                />
                <Textarea 
                  placeholder="Ваш вопрос" 
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 min-h-[100px]"
                />
                <Button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-black font-bold">
                  Отправить заявку
                </Button>
              </form>
              
              <div className="text-xs text-gray-500 mt-4">
                Перезвоним и проконсультируем через 5 минут
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Профессионально решаем все ваши задачи в ремонте</h2>
            <p className="text-xl text-gray-400">Выберите нужную услугу</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-black border-gray-700 overflow-hidden group hover:border-yellow-500 transition-all duration-300">
              <div 
                className="h-64 bg-cover bg-center relative"
                style={{
                  backgroundImage: `url(/img/6da7185e-24dc-4142-8531-37bc574ff509.jpg)`
                }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold text-white mb-2">ДИЗАЙН-ПРОЕКТИРОВАНИЕ</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <Button variant="outline" className="w-full border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black">
                  ПЕРЕЙТИ НА СТРАНИЦУ
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black border-gray-700 overflow-hidden group hover:border-yellow-500 transition-all duration-300">
              <div 
                className="h-64 bg-cover bg-center relative"
                style={{
                  backgroundImage: `url(/img/2711aa10-69f8-492d-adda-d1e80f67b95c.jpg)`
                }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold text-white mb-2">КОМПЛЕКСНЫЙ РЕМОНТ КВАРТИР И ДОМОВ</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <Button variant="outline" className="w-full border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black">
                  ПЕРЕЙТИ НА СТРАНИЦУ
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black border-gray-700 overflow-hidden group hover:border-yellow-500 transition-all duration-300">
              <div 
                className="h-64 bg-cover bg-center relative"
                style={{
                  backgroundImage: `url(/img/e34b0e59-7771-400a-a6ff-9cf0dc126b6e.jpg)`
                }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold text-white mb-2">МАШИННАЯ ШТУКАТУРКА</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <Button variant="outline" className="w-full border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black">
                  ПЕРЕЙТИ НА СТРАНИЦУ
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Более 100 реализованных проектов в 2023 году</h2>
            <p className="text-xl text-gray-400">Вкладываемся душой и делом. За каждым — своя история. Изучите подробнее и вдохновитесь идеями</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-5xl font-bold text-yellow-500 mb-2 group-hover:scale-110 transition-transform">100+</div>
              <div className="text-gray-400">Завершенных проектов</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold text-yellow-500 mb-2 group-hover:scale-110 transition-transform">5</div>
              <div className="text-gray-400">Лет гарантии</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold text-yellow-500 mb-2 group-hover:scale-110 transition-transform">24/7</div>
              <div className="text-gray-400">Поддержка клиентов</div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold text-yellow-500 mb-2 group-hover:scale-110 transition-transform">50+</div>
              <div className="text-gray-400">Специалистов в команде</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">О компании ВАШДОМ</h2>
              <div className="space-y-6 text-lg text-gray-300">
                <p>
                  Мы — команда профессионалов с многолетним опытом в сфере строительства и ремонта. 
                  Наша миссия — создавать пространства, которые превосходят ожидания наших клиентов.
                </p>
                <p>
                  Каждый проект для нас — это возможность воплотить мечты в реальность, используя 
                  современные технологии и качественные материалы.
                </p>
                <div className="flex items-center space-x-4 pt-4">
                  <Icon name="Award" className="text-yellow-500" size={24} />
                  <span className="font-semibold">Сертифицированные специалисты</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Shield" className="text-yellow-500" size={24} />
                  <span className="font-semibold">Официальные гарантии на все виды работ</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Icon name="Clock" className="text-yellow-500" size={24} />
                  <span className="font-semibold">Соблюдение сроков договора</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div 
                className="h-96 bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: `url(/img/2711aa10-69f8-492d-adda-d1e80f67b95c.jpg)`
                }}
              />
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-yellow-600 to-yellow-500 text-black p-6 rounded-lg">
                <div className="text-2xl font-bold">Работаем с 2014 года</div>
                <div className="font-semibold">Надежность проверенная временем</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded transform rotate-45"></div>
                <div className="text-2xl font-bold">
                  ВАШ<span className="text-yellow-500">ДОМ</span>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Ремонт и отделка недвижимости в Санкт-Петербурге. Работаем с 2014 г.
              </p>
              <div className="text-sm text-gray-500">
                Адрес офиса: г. Санкт-Петербург, Малый проспект Васильевского острова 22, БЦ Северный, Офис 202
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Дизайн-проектирование</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Комплексный ремонт</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Машинная штукатурка</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Отделочные работы</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <div>+7 (812) 983 33 88</div>
                <div>+7 (929) 187-05-65</div>
                <div className="text-yellow-500">info@vashdom.ru</div>
                <div>Пн-Пт: 10:00-19:00</div>
                <div>Сб: 10:00-15:00</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Следите за нами</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-green-600 transition-colors">
                  <Icon name="Phone" size={20} />
                </div>
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
                  <Icon name="Send" size={20} />
                </div>
                <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-500 transition-colors">
                  <Icon name="Mail" size={20} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>&copy; 2024 ВАШДОМ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;