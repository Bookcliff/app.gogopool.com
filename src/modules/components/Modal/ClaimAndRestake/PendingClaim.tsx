import { FunctionComponent } from 'react'

import { Flex, Text } from '@chakra-ui/react'

export interface PendingClaimProps {
  rewardsToClaim: any
  claimAmount: any
  transactionHash: any
}

export const PendingClaim: FunctionComponent<PendingClaimProps> = ({
  claimAmount,
  rewardsToClaim,
  transactionHash,
}) => {
  const restakeAmount = rewardsToClaim - claimAmount
  return (
    <Flex align="center" direction="column" gap={2}>
      <svg
        fill="none"
        height="183"
        viewBox="0 0 164 183"
        width="164"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_3592_7128)">
          <path
            d="M144.5 11C144.5 11.5574 144.188 12.1736 143.43 12.8418C142.674 13.5079 141.53 14.1737 140.01 14.8218C136.974 16.1163 132.55 17.2934 127.045 18.2861C116.043 20.27 100.824 21.5 84 21.5C67.1757 21.5 51.9568 20.27 40.9552 18.2861C35.4504 17.2934 31.0261 16.1163 27.9898 14.8218C26.4696 14.1737 25.3257 13.5079 24.5699 12.8418C23.8116 12.1736 23.5 11.5574 23.5 11C23.5 10.4426 23.8116 9.82644 24.5699 9.15824C25.3257 8.49214 26.4696 7.82635 27.9898 7.17825C31.0261 5.88374 35.4504 4.70657 40.9552 3.71389C51.9568 1.73 67.1757 0.5 84 0.5C100.824 0.5 116.043 1.73 127.045 3.71389C132.55 4.70657 136.974 5.88374 140.01 7.17825C141.53 7.82635 142.674 8.49214 143.43 9.15824C144.188 9.82644 144.5 10.4426 144.5 11Z"
            fill="#E9F8FF"
            stroke="black"
          />
          <path
            d="M106.5 179C106.5 179.058 106.465 179.2 106.197 179.418C105.934 179.632 105.516 179.861 104.931 180.092C103.764 180.551 102.047 180.976 99.8884 181.335C95.5798 182.053 89.6086 182.5 83 182.5C76.3914 182.5 70.4202 182.053 66.1116 181.335C63.9534 180.976 62.2359 180.551 61.0693 180.092C60.4836 179.861 60.0659 179.632 59.8034 179.418C59.5346 179.2 59.5 179.058 59.5 179C59.5 178.942 59.5346 178.8 59.8034 178.582C60.0659 178.368 60.4836 178.139 61.0693 177.908C62.2359 177.449 63.9534 177.024 66.1116 176.665C70.4202 175.947 76.3914 175.5 83 175.5C89.6086 175.5 95.5798 175.947 99.8884 176.665C102.047 177.024 103.764 177.449 104.931 177.908C105.516 178.139 105.934 178.368 106.197 178.582C106.465 178.8 106.5 178.942 106.5 179Z"
            fill="#DDD5F6"
            stroke="black"
          />
          <path
            d="M121 160C124 160 124 154 124 154C124 154 124 160 127 160C124 160 124 166 124 166C124 166 124 160 121 160Z"
            fill="#FEF2DF"
            stroke="black"
            strokeLinejoin="round"
          />
          <path
            d="M30 154C34 154 34 146 34 146C34 146 34 154 38 154C34 154 34 162 34 162C34 162 34 154 30 154Z"
            fill="#FEF2DF"
            stroke="black"
            strokeLinejoin="round"
          />
          <path
            d="M23 51C26.5 51 26.5 44 26.5 44C26.5 44 26.5 51 30 51C26.5 51 26.5 58 26.5 58C26.5 58 26.5 51 23 51Z"
            fill="#FEF2DF"
            stroke="black"
            strokeLinejoin="round"
          />
          <path
            d="M0 102C6 102 6 90 6 90C6 90 6 102 12 102C6 102 6 114 6 114C6 114 6 102 0 102Z"
            fill="#FEF2DF"
            stroke="black"
            strokeLinejoin="round"
          />
          <path
            d="M144 52C148 52 148 44 148 44C148 44 148 52 152 52C148 52 148 60 148 60C148 60 148 52 144 52Z"
            fill="#FEF2DF"
            stroke="black"
            strokeLinejoin="round"
          />
          <path
            d="M156 110C160 110 160 102 160 102C160 102 160 110 164 110C160 110 160 118 160 118C160 118 160 110 156 110Z"
            fill="#FEF2DF"
            stroke="black"
            strokeLinejoin="round"
          />
          <path
            clipRule="evenodd"
            d="M79.5 142C106.838 142 129 119.838 129 92.4998C129 75.9631 120.891 61.3204 108.432 52.3311C124.531 60.5004 135.562 77.2118 135.562 96.4998C135.562 123.838 113.4 146 86.0623 146C75.2609 146 65.2675 142.54 57.1299 136.669C63.8486 140.078 71.4499 142 79.5 142Z"
            fill="#FF845A"
            fillRule="evenodd"
          />
          <mask
            height="94"
            id="mask0_3592_7128"
            maskUnits="userSpaceOnUse"
            width="79"
            x="57"
            y="52"
          >
            <path
              clipRule="evenodd"
              d="M79.5 142C106.838 142 129 119.838 129 92.4998C129 75.9631 120.891 61.3204 108.432 52.3311C124.531 60.5004 135.562 77.2118 135.562 96.4998C135.562 123.838 113.4 146 86.0623 146C75.2609 146 65.2675 142.54 57.1299 136.669C63.8486 140.078 71.4499 142 79.5 142Z"
              fill="#EFAC83"
              fillRule="evenodd"
            />
          </mask>
          <g mask="url(#mask0_3592_7128)">
            <path d="M143 102.529L123.714 99L88 121.353L123.714 131L143 102.529Z" fill="#B12804" />
            <path d="M141 107.529L121.714 104L86 126.353L121.714 136L141 107.529Z" fill="#B12804" />
          </g>
          <circle cx="86.0625" cy="96.5" r="49" stroke="black" />
          <circle cx="79.5" cy="92.5" fill="#FF845A" r="49.5" />
          <circle cx="79.5" cy="92.5" r="49" stroke="black" />
          <circle cx="79.5" cy="92.5" r="47" stroke="black" />
          <circle cx="79.5" cy="92.5" r="48" stroke="#FECB94" />
          <g clipPath="url(#clip1_3592_7128)">
            <path
              d="M95.1397 110.52C95.0497 110.07 94.8897 109.49 94.6697 108.7C94.6597 108.66 94.6498 108.61 94.6298 108.57V108.53H94.6197L91.4298 97.2099L91.3897 97.0799C91.1897 96.3799 91.0398 95.8599 90.8998 95.4599C90.8598 95.3399 90.8298 95.2299 90.7898 95.1299C90.7498 95.0099 90.7098 94.8999 90.6798 94.7899C90.6398 94.6699 90.6097 94.5599 90.5697 94.4599C90.5297 94.3399 90.4897 94.2299 90.4597 94.1299C90.4197 94.0099 90.3797 93.8999 90.3497 93.7999C90.3097 93.6799 90.2698 93.5699 90.2398 93.4699C90.1998 93.3499 90.1598 93.2399 90.1298 93.1399C90.0898 93.0199 90.0598 92.9099 90.0198 92.8099C89.9598 92.6299 89.9097 92.4599 89.8497 92.3099C89.6897 91.8899 89.5598 91.6899 89.4498 91.5899C89.1198 91.2999 88.6797 91.2099 88.2597 91.3499C88.1097 91.3999 87.9098 91.5399 87.5798 91.8899C87.2598 92.2299 86.8698 92.7199 86.3298 93.4099L79.0098 102.61L78.9897 102.64C78.4497 103.32 78.0598 103.81 77.7898 104.21C77.5198 104.61 77.4097 104.86 77.3797 105.06C77.3297 105.44 77.3798 105.8 77.5198 106.1C77.5498 106.22 77.5797 106.33 77.6297 106.43C77.6597 106.55 77.6897 106.66 77.7397 106.76C77.7697 106.88 77.7998 106.99 77.8498 107.09C77.8798 107.21 77.9097 107.32 77.9597 107.42C77.9897 107.54 78.0197 107.65 78.0697 107.75C78.0997 107.87 78.1298 107.98 78.1798 108.08C78.2097 108.2 78.2398 108.31 78.2898 108.41C78.3198 108.53 78.3497 108.64 78.3997 108.74C78.4597 109.02 78.5797 109.27 78.7497 109.46C78.8497 109.57 79.0298 109.69 79.4498 109.81C79.8598 109.93 80.4098 110.05 81.1998 110.21L91.7097 112.34C92.4997 112.5 93.0497 112.61 93.4797 112.65C93.9097 112.69 94.1198 112.65 94.2698 112.59C94.6998 112.39 95.0498 111.96 95.1798 111.42C95.2297 111.23 95.2297 110.96 95.1397 110.51V110.52Z"
              fill="#EEEEE7"
              stroke="black"
            />
            <path
              d="M84.0699 86C85.2699 84.47 85.8099 83.77 86.1399 82.99C86.5099 82.13 86.6999 81.19 86.6899 80.25C86.6899 79.41 86.4599 78.56 85.9499 76.71V76.67H85.9399L83.7099 68.51C83.4799 67.67 83.3199 67.07 83.1599 66.62C83.1199 66.5 83.0899 66.39 83.0499 66.29C83.0099 66.16 82.9699 66.03 82.9299 65.92C82.8999 65.81 82.8599 65.72 82.8299 65.62C82.7899 65.49 82.2999 64.03 82.2599 63.92C82.2199 63.8 82.1899 63.69 82.1499 63.59C81.9899 63.13 81.8499 62.93 81.7299 62.82C81.3999 62.52 80.9499 62.43 80.5299 62.58C80.3799 62.63 80.1799 62.77 79.8499 63.13C79.5299 63.48 79.1299 63.98 78.5899 64.68L53.1199 97.36C52.5799 98.05 52.1899 98.55 51.9299 98.95C51.6599 99.35 51.5499 99.61 51.5199 99.81C51.4699 100.19 51.5199 100.54 51.6599 100.84C51.6899 100.96 52.4999 103.4 52.5499 103.51C52.6099 103.79 52.7299 104.04 52.8999 104.23C53.0099 104.35 53.1899 104.46 53.5999 104.58C53.9999 104.7 54.5499 104.81 55.3299 104.97L62.6699 106.46C64.4299 106.82 65.1999 106.97 65.9199 106.89C66.7299 106.79 67.5299 106.47 68.2399 105.95C68.8899 105.48 69.4299 104.79 70.6299 103.27L70.6599 103.23L84.0499 86H84.0699Z"
              fill="#EEEEE7"
              stroke="black"
            />
            <path
              d="M80.5498 62.5697C80.9698 62.4297 81.4198 62.5197 81.7498 62.8097C81.8698 62.9197 81.9998 63.1197 82.1698 63.5797C82.3298 64.0297 82.4998 64.6397 82.7298 65.4997L84.9598 73.6597V73.6997H84.9698C85.4698 75.5497 85.6998 76.3997 85.7098 77.2397C85.7098 78.1797 85.5298 79.1197 85.1598 79.9797C84.8298 80.7597 84.2898 81.4597 83.0898 82.9897L69.6998 100.22L69.6698 100.26C68.4698 101.78 67.9298 102.48 67.2798 102.94C66.5598 103.46 65.7698 103.78 64.9598 103.88C64.2398 103.96 63.4598 103.8 61.7098 103.45L54.3698 101.96C53.5898 101.8 53.0398 101.69 52.6398 101.57C52.2398 101.45 52.0498 101.33 51.9398 101.22C51.6298 100.87 51.4798 100.35 51.5598 99.7997C51.5898 99.5897 51.6998 99.3397 51.9698 98.9397C52.2398 98.5397 52.6198 98.0397 53.1598 97.3497L78.6098 64.6697L80.5598 62.5697H80.5498ZM80.5498 62.5697C80.3998 62.6197 80.1998 62.7597 79.8698 63.1197C79.5498 63.4697 79.1498 63.9697 78.6098 64.6697L80.5598 62.5697H80.5498ZM93.2698 109.6C93.1298 109.67 92.9098 109.7 92.4798 109.66C92.0498 109.62 91.4998 109.5 90.7098 109.35L80.1998 107.22C79.4098 107.06 78.8598 106.95 78.4498 106.82C78.0398 106.7 77.8598 106.58 77.7498 106.47C77.4398 106.12 77.2898 105.6 77.3698 105.04C77.3998 104.84 77.5098 104.59 77.7798 104.19C78.0498 103.79 78.4398 103.3 78.9798 102.62L78.9998 102.59L86.3198 93.3897C86.8598 92.7097 87.2498 92.2197 87.5698 91.8697C87.8898 91.5197 88.0998 91.3797 88.2498 91.3297C88.6698 91.1897 89.1098 91.2797 89.4398 91.5697C89.5598 91.6697 89.6898 91.8697 89.8398 92.2897C89.9998 92.7097 90.1598 93.2797 90.3898 94.0697L90.4298 94.1997L93.6198 105.52V105.56L93.6698 105.69C93.8898 106.49 94.0498 107.06 94.1398 107.51C94.2298 107.96 94.2298 108.23 94.1798 108.42C94.0498 108.96 93.6998 109.39 93.2698 109.59V109.6Z"
              fill="white"
              stroke="black"
            />
          </g>
          <path
            d="M93.57 166.09C93.49 165.96 91.04 163.51 90.9 163.42C90.73 163.14 90.43 162.95 90.06 162.95H88V152.95C88 152.59 87.8 152.28 87.51 152.11C87.43 151.97 84.98 149.53 84.84 149.44C84.66 149.15 84.36 148.95 84 148.95H80C79.45 148.95 79 149.4 79 149.95V161.95C79 162.5 78.55 162.95 78 162.95H73.95C73.14 162.95 72.66 163.87 73.14 164.53L81.2 175.81C81.27 175.9 81.36 175.96 81.45 176.02C81.45 176.02 84.03 178.62 84.12 178.69L84.21 178.81C84.61 179.37 85.44 179.37 85.84 178.81L93.9 167.53C94.26 167.02 94.07 166.37 93.6 166.09H93.57Z"
            fill="#EEEEE7"
            stroke="black"
            strokeLinejoin="round"
          />
          <path
            d="M82.8699 175.86C82.4699 176.42 81.6399 176.42 81.2399 175.86L73.1899 164.58C72.7199 163.92 73.1899 163 73.9999 163H78.0599C78.6099 163 79.0599 162.55 79.0599 162V150C79.0599 149.45 79.5099 149 80.0599 149H84.0599C84.6099 149 85.0599 149.45 85.0599 150V162C85.0599 162.55 85.5099 163 86.0599 163H90.1199C90.9299 163 91.4099 163.92 90.9299 164.58L82.8699 175.86Z"
            fill="white"
            stroke="black"
            strokeLinejoin="round"
          />
          <path
            d="M93.57 27.0902C93.49 26.9602 91.04 24.5102 90.9 24.4202C90.73 24.1402 90.43 23.9502 90.06 23.9502H88V13.9502C88 13.5902 87.8 13.2802 87.51 13.1102C87.43 12.9702 84.98 10.5302 84.84 10.4402C84.66 10.1502 84.36 9.9502 84 9.9502H80C79.45 9.9502 79 10.4002 79 10.9502V22.9502C79 23.5002 78.55 23.9502 78 23.9502H73.95C73.14 23.9502 72.66 24.8702 73.14 25.5302L81.2 36.8102C81.27 36.9002 81.36 36.9602 81.45 37.0202C81.45 37.0202 84.03 39.6202 84.12 39.6902L84.21 39.8102C84.61 40.3702 85.44 40.3702 85.84 39.8102L93.9 28.5302C94.26 28.0202 94.07 27.3702 93.6 27.0902H93.57Z"
            fill="#EEEEE7"
            stroke="black"
            strokeLinejoin="round"
          />
          <path
            d="M82.8699 36.86C82.4699 37.42 81.6399 37.42 81.2399 36.86L73.1899 25.58C72.7199 24.92 73.1899 24 73.9999 24H78.0599C78.6099 24 79.0599 23.55 79.0599 23V11C79.0599 10.45 79.5099 10 80.0599 10H84.0599C84.6099 10 85.0599 10.45 85.0599 11V23C85.0599 23.55 85.5099 24 86.0599 24H90.1199C90.9299 24 91.4099 24.92 90.9299 25.58L82.8699 36.86Z"
            fill="white"
            stroke="black"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_3592_7128">
            <rect fill="white" height="183" width="164" />
          </clipPath>
          <clipPath id="clip1_3592_7128">
            <rect fill="white" height="51.18" transform="translate(51 62)" width="44.72" />
          </clipPath>
        </defs>
      </svg>

      <Text className="my-4 text-center font-domaine font-bold" fontSize={30}>
        Things are happening...
      </Text>

      <div className="mb-6 flex w-full justify-between border-b border-dashed border-gray-400 pb-2">
        <span>Claiming:</span>
        {rewardsToClaim.toLocaleString(undefined, {
          maximumFractionDigits: 2,
          minimumFractionDigits: 2,
        })}
      </div>

      <div className="mb-6 flex w-full justify-between border-b border-dashed border-gray-400 pb-2">
        <span>Restaking:</span>
        {restakeAmount.toLocaleString(undefined, {
          maximumFractionDigits: 2,
          minimumFractionDigits: 2,
        })}
      </div>
    </Flex>
  )
}