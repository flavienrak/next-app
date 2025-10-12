import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ButtonComponent from '@/components/utils/ButtonComponent';
import Image from 'next/image';

export default function Home() {
  const cardData = [
    {
      id: 1,
      title: 'Fill In The Smart Form',
      desc: "Indicate your illness and the desired duration. It's quick and intuitive.",
      img: '/smart.webp',
    },
    {
      id: 2,
      title: 'Receive Your PDF In 1 Minute',
      desc: "After you've completed the checkout, your pre-filled sick leave will be sent by email within 1 minute, and it will be ready on the payment confirmation page.",
      img: '/pdf.webp',
    },
    {
      id: 3,
      title: '100% Satisfaction Guarantee',
      desc: 'Join hundreds of thousands of satisfied customers who trust us. Our sick leave plans are easy to use and designed to meet your needs quickly and efficiently!',
      img: '/satisfaction.webp',
    },
  ];

  return (
    <div className="text-white">
      <div className="z-50 fixed top-0 left-0 w-full flex justify-center items-center bg-[#2323FE] h-[36px]">
        <p className="font-medium tracking-wider">
          30% OFF if you order in the next{' '}
          <span className="font-bold tracking-wider">08 </span> :{' '}
          <span>11</span>
        </p>
      </div>

      <header>
        <Header />
      </header>

      <div className="mt-[120px]">
        <main>
          <div className="relative h-[31.5rem] flex flex-col justify-center gap-7 items-center bg-img">
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-[50px] text-center font-semibold leading-[60px]">
                Your Doctor's Note <br />
                In 1 Minute, for $29,99!
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="420"
                height="11"
                viewBox="0 0 489 11"
                fill="none"
              >
                <path
                  d="M2.04221 8.74936C140.824 4.26105 278.754 -2.03459 417.339 5.49864C440.545 6.76009 463.751 8.02153 486.958 9.28298"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <ButtonComponent label="Get your Note Now" />
          </div>

          <div className="text-black p-[30px] flex justify-center">
            <div className="max-w-[1152px] flex flex-col gap-8">
              <div className="fade-in flex justify-center">
                <div className="fade-in flex flex-col gap-4 mx-[270px]">
                  <h2 className="text-[48px] text-center font-semibold leading-[58px]">
                    Get An Online Doctor's <br /> Note In 3 Easy Steps
                  </h2>
                  <p className="text-zinc-600 text-[18px] leading-[23px]">
                    With our online platform we make it quick and simple for you
                    to obtain a doctors note, so you can focus on rest and
                    recovery.
                  </p>
                </div>
              </div>

              <div className="fade-in flex justify-between gap-4">
                {cardData.map((c) => (
                  <div
                    key={c.id}
                    className="flex flex-col items-center gap-4 px-6 pt-6 pb-12 h-max rounded-xl bg-blue-100 max-w-[370px]"
                  >
                    <div className="relative h-56 w-56">
                      <Image
                        src={c.img}
                        alt={c.title}
                        fill
                        className="absolute top-0 left-0 w-full h-full"
                      />
                    </div>
                    <h4 className="text-[24px] leading-[36px] text-center font-semibold tracking-wide">
                      {c.title}
                    </h4>
                    <p className="text-[14px] leading-[18px] text-zinc-600 tracking-wider">
                      {c.desc}
                    </p>
                  </div>
                ))}
              </div>

              <ButtonComponent label="Get your Note Now" dark />

              <div className="fade-in flex justify-center items-center my-6 gap-6 bg-[#B9EEDF] p-[30px] rounded-xl px-[220px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="200"
                  height="179"
                  viewBox="0 0 144 179"
                  fill="none"
                >
                  <path
                    d="M70.6345 2.542L4.26251 31.173C3.52946 31.4892 3.05469 32.2111 3.05469 33.0094V93.035C6.7274 141.641 49.3549 168.799 70.8084 176.571C71.2149 176.718 71.6507 176.717 72.0624 176.585C122.544 160.355 139.021 114.179 140.944 93.035V33.0181C140.944 32.2154 140.464 31.4904 139.725 31.1769L72.2077 2.53722C71.7047 2.32384 71.1362 2.32557 70.6345 2.542Z"
                    stroke="#2F474D"
                    strokeWidth="4.44805"
                  />
                  <path
                    d="M44.4966 76.8984V60.752L45.0036 61.0723C44.7546 61.606 44.3631 62.1131 43.8294 62.5935C43.2956 63.0561 42.6729 63.4564 41.9612 63.7945C41.2495 64.1325 40.4844 64.3727 39.666 64.5151V61.179C40.3777 61.0723 41.0983 60.841 41.8277 60.4851C42.5572 60.1293 43.2155 59.7112 43.8027 59.2308C44.3898 58.7326 44.8079 58.2166 45.057 57.6829H47.886V76.8984H44.4966ZM58.5538 77.1653C56.9881 77.1653 55.6003 76.7472 54.3904 75.911C53.1805 75.0569 52.2287 73.8827 51.5348 72.3881C50.8587 70.8758 50.5206 69.1499 50.5206 67.2106C50.5206 65.2712 50.8587 63.5721 51.5348 62.1131C52.2109 60.6364 53.1539 59.4888 54.3637 58.6703C55.5914 57.8341 56.9881 57.416 58.5538 57.416C60.1373 57.416 61.534 57.8341 62.7439 58.6703C63.9537 59.4888 64.8967 60.6364 65.5728 62.1131C66.2667 63.5721 66.6137 65.2712 66.6137 67.2106C66.6137 69.1677 66.2667 70.8936 65.5728 72.3881C64.8967 73.8827 63.9537 75.0569 62.7439 75.911C61.534 76.7472 60.1373 77.1653 58.5538 77.1653ZM58.5538 74.2563C59.5324 74.2563 60.3419 73.9449 60.9824 73.3222C61.6229 72.6995 62.1033 71.8543 62.4236 70.7868C62.7616 69.7193 62.9307 68.5183 62.9307 67.1839C62.9307 65.8495 62.7705 64.6663 62.4503 63.6344C62.13 62.6024 61.6407 61.7929 60.9824 61.2057C60.3419 60.6186 59.5324 60.325 58.5538 60.325C57.593 60.325 56.7835 60.6275 56.1252 61.2324C55.4846 61.8195 55.0042 62.6291 54.684 63.661C54.3637 64.693 54.2036 65.8673 54.2036 67.1839C54.2036 68.5361 54.3637 69.746 54.684 70.8135C55.0042 71.881 55.4935 72.7262 56.1518 73.3489C56.8102 73.9538 57.6108 74.2563 58.5538 74.2563ZM76.9281 77.1653C75.3623 77.1653 73.9746 76.7472 72.7647 75.911C71.5548 75.0569 70.6029 73.8827 69.909 72.3881C69.2329 70.8758 68.8949 69.1499 68.8949 67.2106C68.8949 65.2712 69.2329 63.5721 69.909 62.1131C70.5851 60.6364 71.5281 59.4888 72.738 58.6703C73.9657 57.8341 75.3623 57.416 76.9281 57.416C78.5116 57.416 79.9083 57.8341 81.1181 58.6703C82.328 59.4888 83.271 60.6364 83.9471 62.1131C84.641 63.5721 84.9879 65.2712 84.9879 67.2106C84.9879 69.1677 84.641 70.8936 83.9471 72.3881C83.271 73.8827 82.328 75.0569 81.1181 75.911C79.9083 76.7472 78.5116 77.1653 76.9281 77.1653ZM76.9281 74.2563C77.9066 74.2563 78.7162 73.9449 79.3567 73.3222C79.9972 72.6995 80.4776 71.8543 80.7979 70.7868C81.1359 69.7193 81.3049 68.5183 81.3049 67.1839C81.3049 65.8495 81.1448 64.6663 80.8246 63.6344C80.5043 62.6024 80.015 61.7929 79.3567 61.2057C78.7162 60.6186 77.9066 60.325 76.9281 60.325C75.9673 60.325 75.1577 60.6275 74.4994 61.2324C73.8589 61.8195 73.3785 62.6291 73.0583 63.661C72.738 64.693 72.5779 65.8673 72.5779 67.1839C72.5779 68.5361 72.738 69.746 73.0583 70.8135C73.3785 71.881 73.8678 72.7262 74.5261 73.3489C75.1844 73.9538 75.9851 74.2563 76.9281 74.2563ZM87.6857 76.8984L101.831 57.6829H104.633L90.488 76.8984H87.6857ZM101.27 77.1653C100.523 77.1653 99.82 76.9874 99.1617 76.6316C98.5034 76.2757 97.9696 75.733 97.5604 75.0036C97.1512 74.2741 96.9466 73.3489 96.9466 72.228C96.9466 71.1071 97.1423 70.1908 97.5337 69.4791C97.9429 68.7496 98.4767 68.2069 99.135 67.8511C99.7933 67.4953 100.505 67.3173 101.27 67.3173C102.071 67.3173 102.8 67.4953 103.459 67.8511C104.135 68.2069 104.668 68.7496 105.06 69.4791C105.451 70.1908 105.647 71.1071 105.647 72.228C105.647 73.3489 105.442 74.2741 105.033 75.0036C104.624 75.733 104.081 76.2757 103.405 76.6316C102.747 76.9874 102.035 77.1653 101.27 77.1653ZM101.27 75.137C101.875 75.137 102.382 74.8879 102.791 74.3897C103.201 73.8916 103.405 73.1621 103.405 72.2013C103.405 71.2761 103.201 70.5733 102.791 70.0929C102.4 69.5947 101.893 69.3456 101.27 69.3456C100.647 69.3456 100.14 69.5947 99.7488 70.0929C99.3752 70.5733 99.1884 71.2761 99.1884 72.2013C99.1884 73.1621 99.3752 73.8916 99.7488 74.3897C100.14 74.8879 100.647 75.137 101.27 75.137ZM90.8616 67.264C90.0966 67.264 89.3849 67.086 88.7266 66.7302C88.0683 66.3744 87.5345 65.8317 87.1253 65.1022C86.7339 64.3727 86.5381 63.4475 86.5381 62.3266C86.5381 61.2057 86.7339 60.2894 87.1253 59.5777C87.5345 58.8483 88.0683 58.3056 88.7266 57.9497C89.3849 57.5939 90.0966 57.416 90.8616 57.416C91.6623 57.416 92.3918 57.5939 93.0501 57.9497C93.7084 58.3056 94.2333 58.8483 94.6247 59.5777C95.0161 60.2894 95.2118 61.2057 95.2118 62.3266C95.2118 63.4475 95.0072 64.3727 94.598 65.1022C94.1888 65.8317 93.655 66.3744 92.9967 66.7302C92.3384 67.086 91.6267 67.264 90.8616 67.264ZM90.8616 65.2357C91.4666 65.2357 91.9737 64.9866 92.3829 64.4884C92.7921 63.9902 92.9967 63.2607 92.9967 62.2999C92.9967 61.3747 92.7921 60.672 92.3829 60.1916C91.9914 59.6934 91.4844 59.4443 90.8616 59.4443C90.2389 59.4443 89.7318 59.6845 89.3404 60.1649C88.9668 60.6453 88.78 61.357 88.78 62.2999C88.78 63.2607 88.9668 63.9902 89.3404 64.4884C89.7318 64.9866 90.2389 65.2357 90.8616 65.2357ZM18.3077 109.898V90.6829H26.421C27.791 90.6829 28.9831 90.9142 29.9972 91.3768C31.0114 91.8394 31.7853 92.4888 32.3191 93.325C32.8706 94.1612 33.1464 95.1398 33.1464 96.2607C33.1464 97.3638 32.8706 98.3335 32.3191 99.1697C31.7853 100.006 31.0114 100.655 29.9972 101.118C28.9831 101.581 27.791 101.812 26.421 101.812H21.0299V99.1697H26.3142C27.4351 99.1697 28.2892 98.9118 28.8763 98.3958C29.4812 97.8798 29.7837 97.1681 29.7837 96.2607C29.7837 95.3533 29.4901 94.6594 28.903 94.179C28.3158 93.6808 27.4529 93.4318 26.3142 93.4318H21.7772V109.898H18.3077ZM29.3033 109.898L20.7364 100.077H24.6329L34.1072 109.898H29.3033ZM36.0094 109.898V96.2874H39.3721V109.898H36.0094ZM35.8492 94.0456V90.3359H39.5055V94.0456H35.8492ZM48.0942 110.165C46.2082 110.165 44.7048 109.774 43.5838 108.991C42.4629 108.19 41.8491 107.087 41.7424 105.682H44.8115C44.9005 106.376 45.2296 106.9 45.799 107.256C46.3683 107.612 47.1334 107.79 48.0942 107.79C48.966 107.79 49.6154 107.657 50.0424 107.39C50.4872 107.105 50.7096 106.705 50.7096 106.189C50.7096 105.815 50.5851 105.513 50.336 105.281C50.0869 105.032 49.6154 104.828 48.9215 104.668L46.7331 104.16C45.2385 103.84 44.1265 103.342 43.397 102.666C42.6853 101.972 42.3295 101.109 42.3295 100.077C42.3295 98.8139 42.8099 97.8264 43.7707 97.1147C44.7492 96.3853 46.0925 96.0205 47.8006 96.0205C49.4909 96.0205 50.8431 96.3853 51.8572 97.1147C52.8892 97.8264 53.4585 98.8139 53.5653 100.077H50.4961C50.4072 99.5256 50.1225 99.1075 49.6421 98.8228C49.1795 98.5381 48.539 98.3958 47.7205 98.3958C46.9555 98.3958 46.3772 98.5203 45.9858 98.7694C45.5944 99.0007 45.3986 99.3477 45.3986 99.8103C45.3986 100.166 45.5499 100.469 45.8524 100.718C46.1548 100.949 46.6619 101.154 47.3736 101.331L49.7222 101.865C51.0566 102.168 52.0618 102.693 52.7379 103.44C53.4318 104.187 53.7788 105.068 53.7788 106.082C53.7788 107.381 53.2806 108.386 52.2842 109.098C51.2879 109.809 49.8912 110.165 48.0942 110.165ZM56.0777 109.898V90.496H59.4404V109.898H56.0777ZM64.8582 109.898L58.6665 102.826L64.6714 96.2874H68.728L61.789 103.44L61.9758 102.186L68.9949 109.898H64.8582ZM68.3794 104.054V101.225H77.9605V104.054H68.3794ZM81.2533 109.898V95.0331C81.2533 93.5385 81.6626 92.3998 82.481 91.617C83.3172 90.8163 84.5627 90.416 86.2174 90.416C86.591 90.416 86.9024 90.4338 87.1514 90.4694C87.4005 90.5049 87.6407 90.5583 87.872 90.6295V93.2449C87.7475 93.1916 87.5874 93.156 87.3916 93.1382C87.1959 93.1026 86.9735 93.0848 86.7244 93.0848C86.0127 93.0848 85.479 93.2627 85.1231 93.6186C84.7851 93.9566 84.6161 94.4548 84.6161 95.1131V109.898H81.2533ZM78.798 98.9295V96.2874H87.5785V98.9295H78.798ZM90.0636 109.898V96.2874H93.3463V99.5701H93.4263V109.898H90.0636ZM93.4263 102.799L93.0794 99.5701C93.3996 98.4136 93.9423 97.5329 94.7074 96.9279C95.4724 96.323 96.3887 96.0205 97.4563 96.0205C97.8299 96.0205 98.0968 96.0561 98.2569 96.1273V99.3032C98.1679 99.2676 98.0434 99.2498 97.8833 99.2498C97.7231 99.232 97.5274 99.2231 97.2961 99.2231C95.9973 99.2231 95.0276 99.5078 94.3871 100.077C93.7466 100.646 93.4263 101.554 93.4263 102.799ZM106.288 110.165C104.846 110.165 103.583 109.863 102.498 109.258C101.43 108.653 100.594 107.817 99.9891 106.749C99.402 105.682 99.1084 104.454 99.1084 103.066C99.1084 101.678 99.402 100.46 99.9891 99.4099C100.594 98.3424 101.43 97.5151 102.498 96.9279C103.565 96.323 104.811 96.0205 106.234 96.0205C107.586 96.0205 108.761 96.3052 109.757 96.8745C110.753 97.4261 111.527 98.209 112.079 99.2231C112.631 100.237 112.906 101.42 112.906 102.773C112.906 103.022 112.897 103.253 112.88 103.467C112.862 103.68 112.835 103.894 112.8 104.107H101.19V101.759H110.211L109.517 102.399C109.517 101.118 109.223 100.157 108.636 99.5167C108.049 98.8762 107.231 98.5559 106.181 98.5559C105.042 98.5559 104.135 98.9473 103.459 99.7302C102.8 100.513 102.471 101.643 102.471 103.12C102.471 104.579 102.8 105.699 103.459 106.482C104.135 107.247 105.087 107.63 106.314 107.63C107.026 107.63 107.649 107.496 108.182 107.23C108.716 106.963 109.108 106.554 109.357 106.002H112.533C112.088 107.283 111.332 108.297 110.264 109.044C109.214 109.792 107.889 110.165 106.288 110.165ZM121.717 110.165C120.276 110.165 119.012 109.863 117.927 109.258C116.859 108.653 116.023 107.817 115.418 106.749C114.831 105.682 114.538 104.454 114.538 103.066C114.538 101.678 114.831 100.46 115.418 99.4099C116.023 98.3424 116.859 97.5151 117.927 96.9279C118.995 96.323 120.24 96.0205 121.663 96.0205C123.016 96.0205 124.19 96.3052 125.186 96.8745C126.183 97.4261 126.957 98.209 127.508 99.2231C128.06 100.237 128.335 101.42 128.335 102.773C128.335 103.022 128.327 103.253 128.309 103.467C128.291 103.68 128.264 103.894 128.229 104.107H116.619V101.759H125.64L124.946 102.399C124.946 101.118 124.652 100.157 124.065 99.5167C123.478 98.8762 122.66 98.5559 121.61 98.5559C120.471 98.5559 119.564 98.9473 118.888 99.7302C118.229 100.513 117.9 101.643 117.9 103.12C117.9 104.579 118.229 105.699 118.888 106.482C119.564 107.247 120.516 107.63 121.743 107.63C122.455 107.63 123.078 107.496 123.612 107.23C124.145 106.963 124.537 106.554 124.786 106.002H127.962C127.517 107.283 126.761 108.297 125.693 109.044C124.644 109.792 123.318 110.165 121.717 110.165Z"
                    fill="#2F474D"
                  />
                </svg>
                <div className="flex flex-col gap-3">
                  <h4 className="text-[32px] leading-[42px] font-semibold">
                    Money Back Guarantee!
                  </h4>
                  <p className="text-[18px] leading-[23px] font-medium">
                    We will refund 100% of your payment, in case you're not 100%
                    satisfied with our service.
                  </p>
                </div>
              </div>

              <div className="fade-in flex flex-col justify-center">
                <div className="mx-[320px] flex flex-col gap-4">
                  <div className="flex flex-col items-center">
                    <h2 className="text-center text-[48px] leading-[58px] font-semibold">
                      Get Peace of Mind <br />
                      With{' '}
                      <span className="text-[48px] font-semibold text-[#2323FE]">
                        My Doctors Note
                      </span>
                    </h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="263"
                      height="8"
                      viewBox="0 0 263 8"
                      fill="none"
                    >
                      <path
                        d="M1.60392 6.51739C75.8107 3.33202 149.537 -0.692141 223.804 1.74768C236.24 2.15623 248.676 2.56478 261.112 2.97334"
                        stroke="#191E28"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <p className="text-[18px] text-zinc-600 leading-[23px] tracking-wide">
                    My Doctor’s Note provides a fast, hassle-free solution for
                    obtaining excuse notes. Focus on your recovery while we take
                    care of the paperwork, delivering your note in minutes.
                  </p>
                </div>
              </div>

              <div className="fade-in flex gap-4 mb-6">
                <div className="flex flex-col gap-4">
                  <div className="h-max flex flex-col gap-4 px-5 pt-6 pb-2 bg-blue-100 border border-white rounded-xl">
                    <h5 className="text-[24px] font-semibold">
                      Trusted by Thousands Across the USA
                    </h5>
                    <ul className="list-disc mx-4 flex flex-col gap-4">
                      <li className="text-[16px] text-zinc-600 tracking-wide">
                        <span className="text-zinc-600 font-semibold">
                          Professional & Reliable –{' '}
                        </span>{' '}
                        Includes key medical absence details in a format widely
                        recognized by workplaces.
                      </li>
                      <li className="text-[16px] text-zinc-600 tracking-wide">
                        <span className="text-zinc-600 font-semibold">
                          Essential Information Included -{' '}
                        </span>{' '}
                        Clearly structured while protecting your privacy.
                      </li>
                      <li className="text-[16px] text-zinc-600 tracking-wide">
                        <span className="text-zinc-600 font-semibold">
                          Instant & Hassle-Free –{' '}
                        </span>{' '}
                        No appointments, no waiting. Receive your document
                        within seconds via email.
                      </li>
                    </ul>
                    <div className="flex justify-between py-2">
                      <div className="relative h-[36px] w-[180px]">
                        <Image
                          src="/walmart.svg"
                          alt="Walmart"
                          fill
                          className="absolute top-0 left-0 w-full h-full"
                        />
                      </div>
                      <div className="relative h-[34px] w-[160px]">
                        <Image
                          src="/fedex.svg"
                          alt="FedEx"
                          fill
                          className="absolute top-0 left-0 w-full h-full"
                        />
                      </div>
                      <div className="relative h-[40px] w-[140px]">
                        <Image
                          src="/starbucks.webp"
                          alt="StarBucks"
                          fill
                          className="absolute top-0 left-0 w-full h-full"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="h-max flex flex-col gap-4 px-5 py-6 bg-blue-100 border border-white rounded-xl">
                    <h5 className="text-[24px] font-semibold">
                      Customer Support That Puts You First
                    </h5>
                    <ul className="list-disc mx-4 flex flex-col gap-4">
                      <li className="text-[16px] text-zinc-600 tracking-wide">
                        <span className="text-zinc-600 font-semibold">
                          Adjustable to Your Needs –{' '}
                        </span>{' '}
                        Easily modify details to match your situation.
                      </li>
                      <li className="text-[16px] text-zinc-600 tracking-wide">
                        <span className="text-zinc-600 font-semibold">
                          Always Here for You –{' '}
                        </span>{' '}
                        Get assistance whenever you need it, day or night.
                      </li>
                      <li className="text-[16px] text-zinc-600 tracking-wide">
                        <span className="text-zinc-600 font-semibold">
                          Real People, Real Support –{' '}
                        </span>{' '}
                        Our team is here to help, every step of the way.
                      </li>
                    </ul>
                    <div className="flex  items-center py-2 gap-8">
                      <div className="relative h-[50px] w-[234px]">
                        <Image
                          src="/people.png"
                          alt="People"
                          fill
                          className="absolute top-0 left-0 w-full h-full"
                        />
                      </div>
                      <p className="text-[22px] text-emerald-500 font-bold tracking-wide">
                        We're ready to help!
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="h-max flex flex-col gap-4 px-5 pt-6 pb-2 bg-blue-100 border border-white rounded-xl">
                    <h5 className="text-[24px] font-semibold">
                      Get Your Note In Under 1 Minute
                    </h5>
                    <ul className="list-disc mx-4 flex flex-col gap-4">
                      <li className="text-[16px] text-zinc-600 tracking-wide">
                        <span className="text-zinc-600 font-semibold">
                          Skip the Wait –{' '}
                        </span>{' '}
                        No appointments, no delays. Get what you need instantly,
                        anytime.
                      </li>
                      <li className="text-[16px] text-zinc-600 tracking-wide">
                        <span className="text-zinc-600 font-semibold">
                          Available 24/7 –{' '}
                        </span>{' '}
                        No need to schedule weeks in advance. Access your
                        document on demand, day or night.
                      </li>
                      <li className="text-[16px] text-zinc-600 tracking-wide">
                        <span className="text-zinc-600 font-semibold">
                          Instant Email Delivery –{' '}
                        </span>{' '}
                        Receive your note directly in your inbox, ready to use.
                      </li>
                    </ul>
                    <div className="h-7"></div>
                  </div>

                  <div className="h-max flex flex-col gap-4 px-5 py-6 bg-blue-100 border border-white rounded-xl">
                    <h5 className="text-[24px] text-center font-semibold">
                      The Best Price In The Market
                    </h5>
                    <p className="text-center line-through pt-2 text-[30px] font-semibold text-zinc-600">
                      $42.99
                    </p>
                    <p className="text-center text-[70px] font-semibold">
                      $29.99
                    </p>
                    <p className="text-[24px] text-center text-emerald-500 font-bold tracking-wide">
                      30% Discount - Limited Time!
                    </p>
                    <div className="h-[6px]"></div>
                  </div>
                </div>
              </div>

              <ButtonComponent label="Get your Doctors Note Now" dark />
            </div>
          </div>
        </main>

        <footer>
          <div className="h-[72px]"></div>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
