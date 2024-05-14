"use client";

import Navigation from "@/components/navigation";
import { useRedirectToBaseHomeIfNotSignedIn } from "@/hooks/redirect";
import Link from "next/link";

const Home: React.FC = () => {
  useRedirectToBaseHomeIfNotSignedIn();
  return (
    <Navigation>
      <div className="container mx-auto max-w-md p-4">
        <h1 className="text-center text-4xl text-white text-shadow shadow-black">
          Welcome to Med-G
        </h1>
        <h1 className="text-center text-gray-400 mt-3">
          How can we help you today?
        </h1>
        <div className="mb-5 mt-5">
          <Link href="/book">
            <div className="bg-white rounded-lg flex items-center justify-start w-full">
              <svg
                width="48"
                height="54"
                viewBox="0 0 48 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="m-[20px]"
              >
                <g clipPath="url(#clip0_61_36)">
                  <path
                    d="M14.9257 18.2205L15.2457 18.1935C15.3616 18.1809 15.4724 18.1399 15.568 18.0742L15.5657 18.0765C15.872 19.116 16.2469 20.2095 16.7154 21.3547C17.3166 22.8532 17.9086 24.084 18.5714 25.272L18.48 25.092C18.4251 25.911 18.3589 26.7525 18.272 27.567C18.2339 28.0475 18.1349 28.5215 17.9771 28.9777L17.9886 28.9372C17.9611 28.9485 17.9223 33.6172 17.9223 33.6172C17.9231 35.0659 18.4191 36.4721 19.3304 37.6096C20.2418 38.747 21.5154 39.5496 22.9463 39.888L22.992 39.897C23.0555 39.7346 23.1675 39.5948 23.3131 39.496C23.4587 39.3973 23.6312 39.3441 23.808 39.3435H25.12C25.2952 39.3458 25.4658 39.3989 25.6106 39.4962C25.7553 39.5934 25.8677 39.7305 25.9337 39.8902L25.936 39.897C27.379 39.5686 28.6672 38.7703 29.5919 37.6314C30.5166 36.4925 31.0236 35.0797 31.0309 33.6217C31.0309 33.6217 30.9509 28.971 30.9097 28.9395C30.7735 28.5046 30.6801 28.0578 30.6309 27.6052L30.6286 27.5715C30.5486 26.7525 30.496 25.9312 30.4206 25.0965C30.9851 24.093 31.5771 22.8645 32.0983 21.5977L32.1851 21.3592C32.6537 20.214 33.0171 19.1227 33.3349 18.081C33.4288 18.1466 33.5381 18.1877 33.6526 18.2002H33.6549L33.9771 18.2272C34.3657 18.2677 34.7086 17.9527 34.7406 17.4645L35.088 13.1197V13.1152C35.0878 12.9404 35.023 12.7716 34.9056 12.6404C34.7883 12.5091 34.6264 12.4244 34.4503 12.402H34.4069C34.7113 10.1396 34.5227 7.83933 33.8537 5.65425L33.8834 5.769C33.2387 4.35986 32.2582 3.12462 31.0251 2.1681C29.7919 1.21158 28.3426 0.562002 26.8 0.274496L26.7406 0.265496C25.9927 0.117892 25.2334 0.0335842 24.4709 0.0134964H24.4229C23.6252 0.0275569 22.8308 0.116459 22.0503 0.278996L22.1326 0.265496C20.5908 0.547198 19.14 1.18835 17.9017 2.13529C16.6633 3.08223 15.6734 4.3074 15.0149 5.70825L14.9897 5.769C14.3316 7.94566 14.1563 10.2361 14.4754 12.4852L14.4663 12.402C14.2897 12.4208 14.1263 12.503 14.0074 12.633C13.8885 12.7629 13.8224 12.9314 13.8217 13.1062V13.122L14.1691 17.4667C14.2011 17.9662 14.5486 18.2677 14.9234 18.2272L14.9257 18.2205Z"
                    fill="#929292"
                  />
                  <path
                    d="M48.9508 46.9755C48.7908 40.1355 48.096 38.5875 47.7211 37.539C47.5726 37.1183 47.4514 34.2743 42.6788 32.4293C39.7531 31.2953 35.9771 31.2728 32.7817 29.943V33.642C32.7784 35.5383 32.1052 37.3745 30.8775 38.8358C29.6499 40.2972 27.9441 41.2928 26.0526 41.652L26 41.661C25.9657 41.8606 25.8614 42.042 25.7052 42.1736C25.5489 42.3051 25.3507 42.3786 25.1451 42.381H25.104V45.171C25.104 46.4802 25.6323 47.7359 26.5728 48.6616C27.5133 49.5874 28.7888 50.1075 30.1188 50.1075C31.4489 50.1075 32.7244 49.5874 33.6649 48.6616C34.6054 47.7359 35.1337 46.4802 35.1337 45.171V43.2225C34.4434 43.1229 33.8141 42.7776 33.3649 42.2521C32.9157 41.7266 32.6777 41.0573 32.696 40.3707C32.7142 39.6842 32.9875 39.028 33.464 38.5264C33.9405 38.0247 34.5873 37.7124 35.2819 37.6484C35.9766 37.5845 36.671 37.7733 37.2337 38.1793C37.7965 38.5852 38.1886 39.1801 38.3359 39.8514C38.4832 40.5228 38.3754 41.2239 38.033 41.8223C37.6906 42.4207 37.1373 42.8748 36.4777 43.0988L36.4571 43.1055V45.2768C36.4571 46.9321 35.7891 48.5197 34.6 49.6902C33.4109 50.8607 31.7982 51.5183 30.1166 51.5183C28.4349 51.5183 26.8222 50.8607 25.6331 49.6902C24.444 48.5197 23.776 46.9321 23.776 45.2768V45.1643V45.1688V42.354C23.5803 42.3409 23.3948 42.2631 23.2496 42.1332C23.1044 42.0034 23.008 41.829 22.976 41.6385V41.634C21.0824 41.2785 19.3732 40.2859 18.1414 38.8262C16.9096 37.3665 16.2318 35.5306 16.224 33.633V29.9048C13.0148 31.2615 9.21599 31.2885 6.27427 32.4248C1.48799 34.2675 1.37827 37.1048 1.23199 37.5323C0.866275 38.5853 0.162275 40.1265 0.0022748 46.971C-0.0251538 47.871 0.00227492 49.2503 2.75885 50.4563C8.76113 52.7738 16.4937 53.4938 24.1166 54.0113H24.848C32.4868 53.4983 40.208 52.7805 46.2057 50.4563C48.9508 49.257 48.976 47.8845 48.9508 46.9755ZM15.3943 44.1855H12.5463V47.0003H10.512V44.1945H7.66399V42.192H10.512V39.3885H12.5463V42.192H15.3943V44.1855Z"
                    fill="#929292"
                  />
                  <path
                    d="M37.0857 40.4213C37.0854 40.0197 36.9231 39.6325 36.6346 39.3488C36.346 39.065 35.9548 38.9057 35.5469 38.9059C35.139 38.906 34.7479 39.0656 34.4595 39.3496C34.1711 39.6335 34.0092 40.0186 34.0092 40.4201C34.0092 40.8216 34.1711 41.2067 34.4595 41.4907C34.7479 41.7746 35.139 41.9342 35.5469 41.9344C35.9548 41.9345 36.346 41.7752 36.6346 41.4915C36.9231 41.2077 37.0854 40.8228 37.0857 40.4213Z"
                    fill="#929292"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_61_36">
                    <rect width="48" height="54" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className="ml-4">
                <h1 className="font-bold">Book with a healthcare provider</h1>
                <h1 className="text-gray-500 text-xs">
                  Speak with a physician
                </h1>
              </div>
            </div>
          </Link>
        </div>
        <div className="mb-5 mt-5">
          <Link href="/check">
            <div className="bg-white rounded-lg flex items-center justify-start w-full">
              <svg
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-3 mb-3 mt-3 mr-[7px]"
              >
                <path
                  d="M44.9837 44.8729H26.7837C25.9943 44.8729 25.3507 45.116 24.8529 45.6021C24.3532 46.0882 24.0518 46.6453 23.9487 47.2733C23.8418 47.8858 23.9293 48.5022 24.2112 49.1225C24.4932 49.7428 25.0192 50.1919 25.7892 50.47L41.5917 56.7117C42.0019 56.8692 42.4103 56.9304 42.8167 56.8954C43.2211 56.8585 43.5808 56.7185 43.8958 56.4754C44.2108 56.2324 44.4704 55.9329 44.6746 55.5771C44.8787 55.2213 44.9818 54.8246 44.9837 54.3871V44.8729ZM29.1667 11.6667C31.5739 11.6667 33.634 12.5232 35.3471 14.2363C37.0601 15.9493 37.9167 18.0094 37.9167 20.4167C37.9167 22.8239 37.0601 24.884 35.3471 26.5971C33.634 28.3101 31.5739 29.1667 29.1667 29.1667C26.7594 29.1667 24.6993 28.3101 22.9862 26.5971C21.2732 24.884 20.4167 22.8239 20.4167 20.4167C20.4167 18.0094 21.2732 15.9493 22.9862 14.2363C24.6993 12.5232 26.7594 11.6667 29.1667 11.6667ZM54.95 33.2063C55.8717 33.2063 56.666 33.5193 57.3329 34.1454C57.9998 34.7715 58.3333 35.5493 58.3333 36.4788C58.3333 37.2624 58.1136 37.9458 57.6742 38.5292C57.2347 39.1125 56.6426 39.5276 55.8979 39.7746L47.9004 41.9563H26.7837C25.1698 41.9563 23.799 42.5201 22.6712 43.6479C21.5435 44.7776 20.9796 46.1485 20.9796 47.7604C20.9796 48.7482 21.278 49.6426 21.875 50.4438C22.4719 51.2449 23.2089 51.8739 24.0858 52.3308L27.3379 53.6229H11.6667V44.8729C11.6667 41.6218 12.7983 38.8646 15.0617 36.6013C17.325 34.3379 20.0822 33.2063 23.3333 33.2063H54.95Z"
                  fill="#929292"
                />
              </svg>
              <div className="ml-4">
                <h1 className="font-bold">Symptom Checker</h1>
                <h1 className="text-gray-500 text-xs">
                  Speak with a therapist
                </h1>
              </div>
            </div>
          </Link>
        </div>
        <div className="mb-5">
          <Link href="/health">
            <div className="bg-white rounded-lg flex items-center justify-start w-full">
              <svg
                width="62"
                height="64"
                viewBox="0 0 62 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="m-4 mr-[10px] ml-4"
              >
                <path
                  opacity="0.5"
                  d="M5.16663 24.848C5.16663 34.792 15.5516 45.3093 23.1518 51.6747C26.5928 54.56 28.3133 56 31 56C33.6866 56 35.4071 54.56 38.8481 51.6773C46.4509 45.3067 56.8333 34.792 56.8333 24.8453C56.8333 8.23201 42.625 2.02934 31 14.864C19.375 2.02934 5.16663 8.23201 5.16663 24.848Z"
                  fill="#929292"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M42.625 16.6667C43.1389 16.6667 43.6317 16.8774 43.9951 17.2525C44.3584 17.6275 44.5625 18.1362 44.5625 18.6667V22H47.7917C48.3056 22 48.7984 22.2107 49.1617 22.5858C49.5251 22.9609 49.7292 23.4696 49.7292 24C49.7292 24.5304 49.5251 25.0391 49.1617 25.4142C48.7984 25.7893 48.3056 26 47.7917 26H44.5625V29.3333C44.5625 29.8638 44.3584 30.3725 43.9951 30.7476C43.6317 31.1226 43.1389 31.3333 42.625 31.3333C42.1112 31.3333 41.6184 31.1226 41.255 30.7476C40.8917 30.3725 40.6875 29.8638 40.6875 29.3333V26H37.4584C36.9445 26 36.4517 25.7893 36.0884 25.4142C35.725 25.0391 35.5209 24.5304 35.5209 24C35.5209 23.4696 35.725 22.9609 36.0884 22.5858C36.4517 22.2107 36.9445 22 37.4584 22H40.6875V18.6667C40.6875 18.1362 40.8917 17.6275 41.255 17.2525C41.6184 16.8774 42.1112 16.6667 42.625 16.6667Z"
                  fill="#929292"
                />
              </svg>

              <div className="ml-4">
                <h1 className="font-bold">View your Health Record</h1>
                <h1 className="text-gray-500 text-xs">
                  Access your health data
                </h1>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Navigation>
  );
};

export default Home;
