import { ReactNode } from 'react';

interface MenuSectionProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

const MenuSection = ({ icon, title, children }: MenuSectionProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-cafe-yellow">
        <span className="text-3xl">{icon}</span>
        <h3 className="font-serif text-2xl font-bold text-cafe-brown">{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default MenuSection;
