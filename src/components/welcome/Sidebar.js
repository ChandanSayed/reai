'use client';
import Image from 'next/image';
import Settings from '/public/images/setting.png';
import Link from 'next/link';
import { MdClose, MdOutlineMenu } from 'react-icons/md';
import { useEffect, useState } from 'react';

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [openMenu]);

  const links = [
    {
      name: 'My journey',
      link: '#',
      style: 'text-off-blue'
    },
    {
      name: 'REimagine',
      link: '#',
      style: ''
    },
    {
      name: 'Ai Listing',
      link: '#',
      style: ''
    },
    {
      name: 'REbot',
      link: '#',
      style: ''
    },
    {
      name: 'Saved',
      link: '#',
      style: ''
    }
  ];

  return (
    <div className={`w-64 bg-white pb-8 flex-col h-screen max-md:absolute max-md:top-0 max-md:bottom-0 max-lg:z-50 transition-all ${openMenu ? 'max-md:-left-0' : 'max-md:-left-64'}`}>
      <MdOutlineMenu onClick={() => setOpenMenu(true)} className={`absolute -right-10 top-3 text-3xl sm:hidden ${openMenu ? 'hidden' : ''}`} />
      <MdClose onClick={() => setOpenMenu(false)} className={`absolute -right-10 top-3 text-3xl sm:hidden ${openMenu ? '' : 'hidden'}`} />
      <div className="pt-8">
        <div className="flex justify-evenly">
          <div className="bg-bg-off-lime flex items-center justify-center w-10 h-10 text-center rounded-full">
            <h1 className="font-medium text-sm">RH</h1>
          </div>
          <div>
            <h1 className="font-medium text-15">RogerHolland</h1>
            <p className="text-sm text-off-color">homeowner</p>
          </div>
          <div className="pt-2">
            <Image src={Settings} quality={100} alt="Settings" className="w-3 h-3" />
          </div>
        </div>
        <div className="mt-5 w-10/12 mx-auto border-b border-dotted border-slate-200"></div>
      </div>
      <div className="pl-8 pt-5 flex flex-col justify-between h-[calc(100%-96px)]">
        <ul className="font-medium text-15 text-black">
          {links.map((link, i) => (
            <li className="mb-5" key={i}>
              <a className={link.style} href={link.link}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <Link href={'/'}>
          <p className="font-semibold text-2xl">
            re<span className="text-blue-600">ai</span>
          </p>
        </Link>
      </div>
    </div>
  );
}
