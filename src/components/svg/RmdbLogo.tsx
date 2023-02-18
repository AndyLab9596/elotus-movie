import React from 'react'

type Props = {
    className?: string;
}

export const RmdbLogo: React.FC<Props> = ({ className }) => {
    return (
        <svg className={`${className}`} width="150" height="41" viewBox="0 0 150 41" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M40.856 20.5C40.856 31.8219 31.7101 41 20.428 41C9.14591 41 0 31.8219 0 20.5C0 9.17814 9.14591 0 20.428 0C31.7101 0 40.856 9.17814 40.856 20.5ZM20.0696 22.9644C21.4104 22.9644 22.4973 21.861 22.4973 20.5C22.4973 19.139 21.4104 18.0356 20.0696 18.0356C18.7289 18.0356 17.6419 19.139 17.6419 20.5C17.6419 21.861 18.7289 22.9644 20.0696 22.9644ZM7.60021 20.5C7.60021 20.0137 7.8523 19.4884 8.44243 18.9476C9.03286 18.4065 9.91809 17.8936 11.0592 17.4514C11.5068 17.2779 11.9894 17.1169 12.5029 16.9703C12.8458 18.0986 13.2961 19.2866 13.847 20.5C13.2961 21.7135 12.8458 22.9014 12.5029 24.0297C11.9894 23.8831 11.5068 23.7221 11.0592 23.5486C9.91809 23.1064 9.03286 22.5935 8.44243 22.0524C7.8523 21.5116 7.60021 20.9863 7.60021 20.5ZM13.5814 24.306C13.8257 23.5099 14.1271 22.6782 14.484 21.8248C14.734 22.3174 14.9999 22.8119 15.2811 23.3064C15.5634 23.8028 15.8535 24.2855 16.1499 24.7531C15.2432 24.6402 14.3828 24.4894 13.5814 24.306ZM12.2035 25.1068C11.6563 24.9507 11.1396 24.7785 10.6577 24.5917C9.44148 24.1203 8.41903 23.5452 7.69109 22.8782C6.96286 22.2108 6.48595 21.4079 6.48595 20.5C6.48595 19.5921 6.96286 18.7892 7.69109 18.1218C8.41903 17.4548 9.44148 16.8797 10.6577 16.4083C11.1396 16.2215 11.6563 16.0493 12.2035 15.8932C12.0633 15.3348 11.952 14.795 11.8704 14.2786C11.6646 12.9746 11.644 11.7892 11.8491 10.8162C12.054 9.84346 12.5008 9.0193 13.2802 8.5625C14.0596 8.1057 14.9861 8.12503 15.9184 8.43118C16.851 8.73745 17.852 9.34835 18.8616 10.1812C19.2605 10.5103 19.6643 10.8771 20.0696 11.2785C20.475 10.8771 20.8788 10.5103 21.2776 10.1812C22.2872 9.34835 23.2882 8.73745 24.2209 8.43118C25.1532 8.12503 26.0797 8.1057 26.859 8.5625C27.6385 9.0193 28.0853 9.84346 28.2902 10.8162C28.4952 11.7892 28.4746 12.9746 28.2688 14.2786C28.1873 14.795 28.076 15.3348 27.9358 15.8932C28.483 16.0493 28.9997 16.2215 29.4815 16.4083C30.6978 16.8797 31.7202 17.4548 32.4482 18.1218C33.1764 18.7892 33.6533 19.5921 33.6533 20.5C33.6533 21.4079 33.1764 22.2108 32.4482 22.8782C31.7202 23.5452 30.6978 24.1203 29.4815 24.5917C28.9997 24.7785 28.483 24.9507 27.9358 25.1068C28.076 25.6652 28.1873 26.205 28.2688 26.7214C28.4746 28.0253 28.4952 29.2108 28.2902 30.1838C28.0853 31.1565 27.6385 31.9807 26.859 32.4375C26.0797 32.8943 25.1532 32.875 24.2209 32.5688C23.2882 32.2625 22.2872 31.6516 21.2776 30.8188C20.8788 30.4897 20.475 30.1229 20.0696 29.7215C19.6643 30.1229 19.2605 30.4897 18.8616 30.8188C17.852 31.6516 16.851 32.2625 15.9184 32.5688C14.9861 32.875 14.0596 32.8943 13.2802 32.4375C12.5008 31.9807 12.054 31.1565 11.8491 30.1838C11.644 29.2108 11.6646 28.0253 11.8704 26.7214C11.952 26.205 12.0633 25.6652 12.2035 25.1068ZM19.2948 28.9139C18.9115 29.2937 18.5314 29.639 18.1581 29.9469C17.2095 30.7296 16.3285 31.2518 15.5713 31.5005C14.8138 31.7492 14.2426 31.7067 13.8325 31.4664C13.4224 31.226 13.1006 30.7452 12.934 29.9548C12.7676 29.1648 12.7726 28.1292 12.966 26.9039C13.0423 26.4205 13.1472 25.9123 13.28 25.3839C14.4118 25.6456 15.6475 25.8432 16.9548 25.9653C17.7148 27.0571 18.5034 28.0476 19.2948 28.9139ZM20.8445 28.9139C21.2278 29.2937 21.6079 29.639 21.9812 29.9469C22.9298 30.7296 23.8108 31.2518 24.568 31.5005C25.3255 31.7492 25.8967 31.7067 26.3067 31.4664C26.7168 31.226 27.0387 30.7452 27.2052 29.9548C27.3717 29.1648 27.3666 28.1292 27.1732 26.9039C27.0969 26.4205 26.9921 25.9123 26.8593 25.3839C25.7275 25.6456 24.4918 25.8432 23.1845 25.9653C22.4245 27.0571 21.6358 28.0476 20.8445 28.9139ZM21.7359 26.0678C21.1861 26.8089 20.627 27.4904 20.0696 28.1037C19.5123 27.4904 18.9532 26.8089 18.4034 26.0678C18.9497 26.0944 19.5058 26.1081 20.0696 26.1081C20.6334 26.1081 21.1895 26.0944 21.7359 26.0678ZM22.5635 24.8959C21.7583 24.9575 20.9245 24.9899 20.0696 24.9899C19.2148 24.9899 18.381 24.9575 17.5757 24.8959C17.1187 24.2164 16.6724 23.4969 16.2433 22.7425C15.8153 21.99 15.4255 21.2397 15.0751 20.5C15.4255 19.7603 15.8153 19.0099 16.2433 18.2575C16.6724 17.5031 17.1187 16.7836 17.5757 16.1041C18.381 16.0425 19.2148 16.0101 20.0696 16.0101C20.9245 16.0101 21.7583 16.0425 22.5635 16.1041C23.0205 16.7836 23.4669 17.5031 23.8959 18.2575C24.3239 19.01 24.7137 19.7603 25.0642 20.5C24.7137 21.2397 24.3239 21.99 23.8959 22.7425C23.4669 23.4969 23.0205 24.2164 22.5635 24.8959ZM23.9894 24.7531C24.8961 24.6402 25.7565 24.4894 26.5579 24.306C26.3136 23.5099 26.0121 22.6782 25.6552 21.8248C25.4052 22.3174 25.1394 22.8119 24.8582 23.3064C24.5758 23.8028 24.2857 24.2855 23.9894 24.7531ZM26.2922 20.5C26.8432 21.7135 27.2934 22.9014 27.6364 24.0297C28.1498 23.8831 28.6324 23.7221 29.0801 23.5486C30.2211 23.1064 31.1064 22.5935 31.6968 22.0524C32.2869 21.5116 32.5391 20.9863 32.5391 20.5C32.5391 20.0137 32.2869 19.4884 31.6968 18.9476C31.1064 18.4065 30.2211 17.8936 29.0801 17.4514C28.6324 17.2779 28.1498 17.1169 27.6364 16.9703C27.2934 18.0986 26.8432 19.2865 26.2922 20.5ZM26.8593 15.6161C26.9921 15.0877 27.0969 14.5795 27.1732 14.0961C27.3666 12.8708 27.3717 11.8352 27.2052 11.0452C27.0387 10.2548 26.7168 9.77399 26.3067 9.53361C25.8967 9.29329 25.3255 9.25077 24.568 9.49952C23.8108 9.74822 22.9298 10.2704 21.9812 11.0531C21.6079 11.361 21.2278 11.7063 20.8445 12.0861C21.6358 12.9524 22.4245 13.9429 23.1845 15.0347C24.4918 15.1568 25.7275 15.3544 26.8593 15.6161ZM19.2948 12.0861C18.9115 11.7063 18.5314 11.361 18.1581 11.0531C17.2095 10.2704 16.3285 9.74822 15.5713 9.49952C14.8138 9.25077 14.2426 9.29329 13.8325 9.53361C13.4224 9.77399 13.1006 10.2548 12.934 11.0452C12.7676 11.8352 12.7726 12.8708 12.966 14.0961C13.0423 14.5795 13.1472 15.0877 13.28 15.6161C14.4118 15.3544 15.6475 15.1568 16.9548 15.0347C17.7148 13.9429 18.5034 12.9524 19.2948 12.0861ZM18.4034 14.9322C18.9532 14.1911 19.5123 13.5096 20.0696 12.8963C20.627 13.5096 21.1861 14.1911 21.7359 14.9322C21.1895 14.9056 20.6334 14.8919 20.0696 14.8919C19.5058 14.8919 18.9497 14.9056 18.4034 14.9322ZM16.1499 16.2469C15.2432 16.3598 14.3828 16.5106 13.5814 16.694C13.8257 17.4901 14.1271 18.3218 14.484 19.1752C14.734 18.6826 14.9999 18.1881 15.2811 17.6935C15.5634 17.1972 15.8535 16.7145 16.1499 16.2469ZM26.5579 16.694C26.3136 17.4901 26.0121 18.3218 25.6552 19.1752C25.4052 18.6826 25.1394 18.1881 24.8582 17.6935C24.5758 17.1972 24.2857 16.7145 23.9894 16.2469C24.8961 16.3598 25.7565 16.5106 26.5579 16.694ZM37.7162 27.6864C38.631 25.4728 39.1358 23.0456 39.1358 20.5C39.1358 17.9544 38.631 15.5272 37.7162 13.3136L36.5244 13.8096L35.3326 14.3055C36.1197 16.2102 36.5554 18.3008 36.5554 20.5C36.5554 22.6992 36.1197 24.7898 35.3326 26.6945L36.5244 27.1904L37.7162 27.6864ZM27.5891 37.8491L27.0949 36.6531L26.6007 35.4572C24.7027 36.247 22.6195 36.6842 20.428 36.6842C18.2365 36.6842 16.1533 36.247 14.2553 35.4572L13.7611 36.6531L13.2669 37.8491C15.4727 38.7671 17.8914 39.2737 20.428 39.2737C22.9646 39.2737 25.3833 38.7671 27.5891 37.8491ZM3.13981 27.6864C2.22511 25.4728 1.72025 23.0456 1.72025 20.5C1.72025 17.9544 2.22511 15.5272 3.13981 13.3136L4.33159 13.8096L5.52337 14.3055C4.73632 16.2102 4.30063 18.3008 4.30063 20.5C4.30063 22.6992 4.73632 24.7898 5.52337 26.6945L4.33159 27.1904L3.13981 27.6864ZM13.2669 3.15087L13.7611 4.34686L14.2553 5.54284C16.1533 4.75301 18.2365 4.31579 20.428 4.31579C22.6195 4.31579 24.7027 4.75301 26.6007 5.54284L27.0949 4.34686L27.5891 3.15087C25.3833 2.23295 22.9646 1.72632 20.428 1.72632C17.8914 1.72632 15.4727 2.23295 13.2669 3.15087ZM93.0741 30.0342C93.5796 30.7067 94.4195 31.0429 95.5932 31.0429C96.7669 31.0429 97.8957 30.634 98.979 29.8161C98.4373 28.9438 98.1665 27.6262 98.1665 25.8633C98.1665 25.1727 98.5097 23.0192 99.1961 19.4025C99.9 15.7678 100.253 13.6688 100.253 13.1054C100.253 11.4152 99.5568 10.5701 98.1665 10.5701C96.7039 10.5701 95.3405 10.8791 94.0763 11.497C92.8302 12.1149 91.7556 12.96 90.8527 14.0322C89.191 16.0314 87.8912 18.4212 86.9521 21.2017H86.627C86.32 17.8215 85.814 15.2498 85.1101 13.487C84.8031 12.7055 84.4056 12.0967 83.9183 11.6605C83.4484 11.2244 82.9518 10.9336 82.4282 10.7882C81.9228 10.6246 81.2994 10.5429 80.5593 10.5429C78.8796 10.5429 77.0195 11.2062 74.979 12.5329L76.4148 15.4498C75.2766 21.7742 74.7082 25.618 74.7082 26.981C74.7082 28.3259 74.9609 29.3436 75.4663 30.0342C75.9724 30.7067 76.8117 31.0429 77.9854 31.0429C79.1597 31.0429 80.2879 30.634 81.3718 29.8161C80.8302 28.9438 80.5593 27.708 80.5593 26.1087C80.5593 24.5094 81.0017 21.7561 81.8866 17.8487H82.3196C82.6086 22.5921 83.0872 25.8088 83.7554 27.499C84.0986 28.335 84.4418 28.9256 84.785 29.2709C85.1463 29.598 85.5613 29.7616 86.0311 29.7616C87.1868 29.7616 88.207 29.3436 89.0918 28.5076C89.2547 26.8901 89.6971 25.0728 90.4191 23.0555C91.1416 21.0382 92.0533 19.3026 93.1553 17.8487H93.5883C92.7397 22.6284 92.3154 25.6816 92.3154 27.0083C92.3154 28.335 92.5681 29.3436 93.0741 30.0342ZM59.7718 23.7915L60.7196 26.5449C61.3156 28.2714 61.9839 29.4526 62.7239 30.0887C63.4646 30.7067 64.4486 31.0156 65.6767 31.0156C66.3088 31.0156 67.0132 30.8611 67.7895 30.5521C68.5844 30.2614 69.171 29.9161 69.5504 29.5163C68.7922 29.0983 68.0247 28.2532 67.2479 26.981C66.4897 25.7089 65.8033 24.1913 65.1893 22.4285C66.3449 21.7379 67.221 20.8474 67.8169 19.757C68.4128 18.6484 68.7105 17.5034 68.7105 16.3221C68.7105 14.741 68.2232 13.387 67.2479 12.2603C66.2726 11.1335 64.9547 10.5701 63.293 10.5701C62.2097 10.5701 60.9905 10.8427 59.6364 11.3879C58.9319 10.8427 57.9295 10.5701 56.6293 10.5701C54.9318 10.5701 53.0717 11.2244 51.0491 12.5329L52.4848 15.4498C51.347 21.7742 50.7782 25.618 50.7782 26.981C50.7782 28.3259 51.031 29.3436 51.5367 30.0342C52.0424 30.7067 52.8821 31.0429 54.0559 31.0429C55.2297 31.0429 56.3584 30.634 57.4419 29.8161C56.9002 28.9438 56.6293 27.6262 56.6293 25.8633C56.6293 25.3545 56.7286 24.5185 56.9273 23.3554C57.8844 23.6462 58.8327 23.7915 59.7718 23.7915ZM61.4778 19.2663C60.6835 20.0114 59.564 20.384 58.1192 20.384C57.8302 20.384 57.6225 20.3748 57.4961 20.3567C57.6406 19.757 58.0018 17.7215 58.5794 14.2503C59.0492 14.1231 59.5185 14.0595 59.9883 14.0595C60.8551 14.0595 61.5233 14.3139 61.9926 14.8228C62.4624 15.3317 62.6971 16.0131 62.6971 16.8673C62.6971 17.7215 62.2909 18.5212 61.4778 19.2663ZM106.839 25.8906C106.839 24.8547 107.082 23.0282 107.57 20.4112C108.057 17.7942 108.355 16.1404 108.463 15.4498L107.028 12.5329C109.321 11.2244 111.272 10.5701 112.879 10.5701C113.674 10.5701 114.27 10.8427 114.667 11.3879C116.166 10.8609 117.547 10.5974 118.812 10.5974C121.159 10.5974 122.983 11.3698 124.283 12.9145C125.583 14.4411 126.233 16.3494 126.233 18.6392C126.233 21.6561 125.132 24.4276 122.929 26.9538C121.864 28.1714 120.455 29.1528 118.703 29.8979C116.97 30.643 115.11 31.0156 113.123 31.0156C111.137 31.0156 109.592 30.5794 108.491 29.7071C107.389 28.8166 106.839 27.5444 106.839 25.8906ZM112.581 26.9265C112.961 26.9992 113.385 27.0355 113.854 27.0355C115.823 27.0355 117.358 26.3267 118.459 24.9092C119.561 23.4735 120.111 21.7106 120.111 19.6207C120.111 17.9305 119.733 16.5856 118.974 15.5861C118.215 14.5865 117.123 14.0867 115.696 14.0867C115.48 14.0867 115.118 14.1231 114.613 14.1958C114.486 15.1226 114.152 17.1945 113.611 20.4112C113.087 23.6098 112.743 25.7816 112.581 26.9265ZM132.69 30.0342C133.196 30.7067 134.027 31.0429 135.183 31.0429C136.338 31.0429 137.449 30.6521 138.515 29.8707C139.616 30.634 141.07 31.0156 142.876 31.0156C144.7 31.0156 146.343 30.4885 147.806 29.4345C149.269 28.3804 150 26.9628 150 25.1818C150 22.4376 148.555 20.811 145.666 20.3021C148.501 19.139 149.919 17.2671 149.919 14.6865C149.919 13.1235 149.395 12.024 148.348 11.3879C147.463 10.8427 146.433 10.5701 145.26 10.5701C143.472 10.5701 141.648 11.1063 139.788 12.1785C139.571 11.0881 138.903 10.5429 137.783 10.5429C136.104 10.5429 134.244 11.2062 132.203 12.5329L133.639 15.4498C132.501 21.7742 131.932 25.618 131.932 26.981C131.932 28.3259 132.185 29.3436 132.69 30.0342ZM142.984 22.7011C143.49 23.1009 143.743 23.7279 143.743 24.5821C143.743 25.4181 143.444 26.0632 142.848 26.5176C142.271 26.9719 141.503 27.1991 140.546 27.1991C139.589 27.1991 138.668 26.9901 137.783 26.5721C137.783 25.4817 137.928 24.1641 138.217 22.6193C139.246 22.274 140.176 22.1013 141.006 22.1013C141.838 22.1013 142.496 22.3013 142.984 22.7011ZM139.707 14.5774C140.519 14.3048 141.278 14.1685 141.982 14.1685C143.391 14.1685 144.095 14.85 144.095 16.2131C144.095 17.3944 143.571 18.303 142.523 18.9391C141.476 19.5571 140.203 19.9205 138.704 20.0296C139.264 17.1036 139.598 15.2862 139.707 14.5774Z" fill="white" />
        </svg>

    )
}