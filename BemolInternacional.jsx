import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export default function BemolInternacional() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white text-center py-16 px-4">
        <h1 className="text-4xl font-bold">Bemol Internacional</h1>
        <p className="text-lg mt-2">O mundo na palma da sua mão! Produtos importados com qualidade e segurança.</p>
        <Button className="mt-4 bg-white text-blue-600 hover:bg-gray-200">Explorar Agora</Button>
      </div>

      {/* Departamentos */}
      <div className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-2 md:grid-cols-3 gap-6">
        {departments.map((dept, index) => (
          <motion.div whileHover={{ scale: 1.05 }} key={index}>
            <Card className="cursor-pointer">
              <CardContent className="p-4 flex flex-col items-center">
                <img src={dept.image} alt={dept.name} className="w-24 h-24 mb-2" />
                <h2 className="font-semibold">{dept.name}</h2>
                <Button variant="outline" className="mt-2">Ver Mais</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Ofertas Especiais */}
      <div className="bg-yellow-100 py-12 text-center">
        <h2 className="text-2xl font-bold">Ofertas Imperdíveis</h2>
        <p className="text-gray-700">Aproveite descontos exclusivos nos melhores produtos importados!</p>
        <Button className="mt-4 bg-blue-600 text-white">Ver Ofertas</Button>
      </div>

      {/* Top 10 Ofertas */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold text-center">Top 10 Ofertas da Categoria</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-6">
          {topOffers.map((offer, index) => (
            <Card key={index} className="cursor-pointer">
              <CardContent className="p-4 flex flex-col items-center">
                <img src={offer.image} alt={offer.name} className="w-24 h-24 mb-2" />
                <h3 className="font-semibold text-center">{offer.name}</h3>
                <p className="text-lg font-bold text-red-600">{offer.price}</p>
                <Button className="mt-2 bg-blue-600 text-white">Comprar Agora</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Formulário de Captura */}
      <div className="max-w-4xl mx-auto py-12 px-4 text-center">
        <h2 className="text-xl font-bold">Receba novidades e promoções!</h2>
        <p className="text-gray-600 mb-4">Cadastre seu e-mail e fique por dentro das melhores ofertas.</p>
        <div className="flex justify-center gap-2">
          <Input type="email" placeholder="Digite seu e-mail" className="w-64" />
          <Button className="bg-blue-600 text-white">Cadastrar</Button>
        </div>
      </div>
    </div>
  );
}

const departments = [
  { name: "Tecnologia & Eletrônicos", image: "https://via.placeholder.com/100" },
  { name: "Moda & Vestuário", image: "https://via.placeholder.com/100" },
  { name: "Casa & Utilidades", image: "https://via.placeholder.com/100" },
  { name: "Beleza & Cuidados Pessoais", image: "https://via.placeholder.com/100" },
  { name: "Brinquedos & Games", image: "https://via.placeholder.com/100" },
  { name: "Esportes & Lazer", image: "https://via.placeholder.com/100" },
];

const topOffers = [
  { name: "Smartphone X", price: "R$ 2.499", image: "https://via.placeholder.com/100" },
  { name: "Fone de Ouvido Y", price: "R$ 199", image: "https://via.placeholder.com/100" },
  { name: "Notebook Z", price: "R$ 4.999", image: "https://via.placeholder.com/100" },
  { name: "Relógio Inteligente A", price: "R$ 999", image: "https://via.placeholder.com/100" },
  { name: "Câmera Fotográfica B", price: "R$ 3.499", image: "https://via.placeholder.com/100" },
  { name: "Mala de Viagem C", price: "R$ 799", image: "https://via.placeholder.com/100" },
  { name: "Console de VideoGame D", price: "R$ 3.999", image: "https://via.placeholder.com/100" },
  { name: "Monitor Gamer E", price: "R$ 1.299", image: "https://via.placeholder.com/100" },
  { name: "Kit de Panelas F", price: "R$ 599", image: "https://via.placeholder.com/100" },
  { name: "Tênis Esportivo G", price: "R$ 349", image: "https://via.placeholder.com/100" },
];
