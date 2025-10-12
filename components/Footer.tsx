import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  const customerLinks = [
    {
      id: 1,
      label: 'Contact Us',
      href: 'https://mydoctorsnote.co/pages/contact',
    },
    {
      id: 2,
      label: 'Refund Requests',
      href: 'mailto:help@urgentsupport.co',
    },
    {
      id: 3,
      label: 'Frequently Asked Questions',
      href: 'https://mydoctorsnote.co/pages/frequently-asked-questions',
    },
  ];

  const policyLinks = [
    {
      id: 1,
      label: 'Terms Of Service',
      href: 'https://mydoctorsnote.co/pages/terms-of-service',
    },
    {
      id: 2,
      label: 'Refund Policy',
      href: 'https://mydoctorsnote.co/pages/refund-policy',
    },
    {
      id: 3,
      label: 'Privacy Policy',
      href: 'https://mydoctorsnote.co/pages/privacy-policy',
    },
    {
      id: 4,
      label: 'Disclaimer Policy',
      href: 'https://mydoctorsnote.co/pages/disclaimer-policy',
    },
    {
      id: 5,
      label: 'Intellectual Property Policy',
      href: 'https://mydoctorsnote.co/pages/intellectual-property-policy',
    },
    {
      id: 6,
      label: 'Jurisdiction Policy',
      href: 'https://mydoctorsnote.co/pages/jurisdiction-policy',
    },
    {
      id: 7,
      label: 'Limitation of Liability Policy',
      href: 'https://mydoctorsnote.co/pages/limitation-of-liability-policy',
    },
    {
      id: 8,
      label: 'Indemnification Policy',
      href: 'https://mydoctorsnote.co/pages/indemnification-policy',
    },
  ];

  return (
    <div className="flex flex-col gap-12 text-zinc-600 border-t border-[rgba(88,88,88,0.08)] p-[36px]">
      <div className="w-full flex justify-center">
        <div className="flex justify-between gap-4 w-full max-w-[1152px]">
          <div className="fade-up flex flex-col gap-6">
            <div className="relative h-[20px] w-[165px]">
              <Image
                src="/logo.avif"
                alt="DoctorsNote"
                fill
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
            <p className="font-light text-[15px]">
              <span className="font-bold tracking-wider">Support </span>{' '}
              (Mon-Fri, 9am-6pm EST)
            </p>
            <p className="font-light text-[15px]">
              <span className="font-bold tracking-wider">Email: </span>{' '}
              help@urgentsupport.co
            </p>
          </div>

          <div className="fade-up flex flex-col gap-6">
            <h6 className="text-[18px] text-black tracking-wider">
              Customer service
            </h6>
            <ul className="flex flex-col gap-4">
              {customerLinks.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-[13px] hover:underline hover:text-[#121212] underline-offset-4"
                  >
                    <span className="font-light tracking-wider">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="fade-up flex flex-col gap-6">
            <h6 className="text-[18px] text-black tracking-wider">Policies</h6>
            <ul className="flex flex-col gap-3">
              {policyLinks.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-[13px] hover:underline hover:text-[#121212] underline-offset-4"
                  >
                    <span className="font-light tracking-wider">
                      {item.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="fade-up flex flex-col gap-6">
            <h6 className="text-[18px] text-black tracking-wider">
              Company Details
            </h6>
            <p className="font-light text-[15px] tracking-wide">
              COMPANY NAME & ADDRESS
            </p>
            <div className="flex flex-col gap-2">
              <p className="font-light text-[15px] tracking-wide">
                Company registration
              </p>
              <p className="font-light text-[15px] tracking-wide">
                number: 000000
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-[rgba(88,88,88,0.08)]"></div>
      <p className="fade-up text-center text-[10px] tracking-[0.07rem] font-light">
        © 2025, My Doctors Note
      </p>
    </div>
  );
}
