import React from 'react';

interface Props {
    className: string;
}

export const TmdbLogo: React.FC<Props> = ({ className }) => {
    return (
        <svg className={`${className}`} width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.27572 11C8.27508 10.6169 8.34869 10.2374 8.49233 9.88328C8.63597 9.52916 8.84682 9.20733 9.11282 8.9362C9.37883 8.66508 9.69476 8.44999 10.0425 8.30323C10.3903 8.15648 10.7631 8.08094 11.1396 8.08094H11.1234C11.4999 8.08094 11.8728 8.15648 12.2205 8.30323C12.5683 8.44999 12.8843 8.66508 13.1503 8.9362C13.4163 9.20733 13.6271 9.52916 13.7708 9.88328C13.9144 10.2374 13.988 10.6169 13.9874 11V11C13.9874 11.7728 13.6856 12.514 13.1485 13.0605C12.6114 13.607 11.883 13.9141 11.1234 13.9141H11.1396C10.3801 13.9141 9.65163 13.607 9.11454 13.0605C8.57745 12.514 8.27572 11.7728 8.27572 11ZM21.6747 5.83312H27.0071C27.7667 5.83312 28.4951 5.5261 29.0322 4.9796C29.5693 4.43311 29.871 3.6919 29.871 2.91903V2.91903C29.8717 2.53593 29.7981 2.15647 29.6544 1.80234C29.5108 1.44822 29.2999 1.12639 29.0339 0.855265C28.7679 0.584142 28.452 0.36905 28.1042 0.222294C27.7564 0.0755381 27.3836 -5.5214e-07 27.0071 0L21.6747 0C21.2982 -5.5214e-07 20.9254 0.0755381 20.5776 0.222294C20.2299 0.36905 19.9139 0.584142 19.6479 0.855265C19.3819 1.12639 19.1711 1.44822 19.0274 1.80234C18.8838 2.15647 18.8102 2.53593 18.8108 2.91903V2.91903C18.8108 3.6919 19.1125 4.43311 19.6496 4.9796C20.1867 5.5261 20.9152 5.83312 21.6747 5.83312V5.83312ZM3.35988 21.995H13.7167C14.4763 21.995 15.2047 21.688 15.7418 21.1415C16.2789 20.595 16.5806 19.8538 16.5806 19.0809V19.0809C16.5813 18.6978 16.5076 18.3183 16.364 17.9642C16.2204 17.6101 16.0095 17.2883 15.7435 17.0171C15.4775 16.746 15.1616 16.5309 14.8138 16.3842C14.466 16.2374 14.0932 16.1619 13.7167 16.1619H3.35988C2.98338 16.1619 2.61057 16.2374 2.26278 16.3842C1.915 16.5309 1.59907 16.746 1.33306 17.0171C1.06706 17.2883 0.856205 17.6101 0.712566 17.9642C0.568926 18.3183 0.495321 18.6978 0.49596 19.0809V19.0809C0.49596 19.8538 0.797694 20.595 1.33478 21.1415C1.87187 21.688 2.60032 21.995 3.35988 21.995V21.995ZM16.9615 13.9141H17.9745L20.3408 8.08094H18.9875L17.545 11.907H17.5288L16.1106 8.08094H14.6681L16.9615 13.9141ZM22.2209 13.9141H23.4852V8.08094H22.2209V13.9141ZM25.8191 13.9141H29.8629V12.7316H27.0833V11.5442H29.5712V10.3568H27.0833V9.26834H29.7171V8.08094H25.8272L25.8191 13.9141ZM1.63699 5.83807H2.9012V1.13793H4.53819V0H0V1.13793H1.63699V5.83807ZM6.32106 5.83807H7.58527V3.31483H10.0327V5.83807H11.2969V0H10.0327V2.17691H7.57716V0H6.32106V5.83807ZM13.0068 5.83807H17.0587V4.65066H14.2629V3.46326H16.7508V2.27586H14.2629V1.1874H16.8967V0H13.0068V5.83807ZM0.202598 13.919H1.45871V9.44151H1.47491L2.93362 13.919H3.88988L5.39721 9.44151H5.41342V13.919H6.67763V8.08094H4.77321L3.44416 11.8905H3.42796L2.10702 8.08094H0.194494L0.202598 13.919ZM18.37 21.9999H20.4219C20.8375 22.0021 21.251 21.9381 21.6472 21.8103C22.0211 21.6915 22.3701 21.503 22.6764 21.2545C22.9742 21.0079 23.2159 20.6984 23.3847 20.3475C23.5717 19.9585 23.6672 19.5305 23.6634 19.0974C23.6767 18.6286 23.5835 18.163 23.3911 17.7368C23.2221 17.3776 22.9709 17.0649 22.6586 16.8248C22.3314 16.5862 21.9605 16.4168 21.5678 16.3268C21.14 16.2181 20.7007 16.1627 20.2598 16.1619H18.3619L18.37 21.9999ZM19.6358 17.3493H20.3814C20.637 17.3484 20.8917 17.3828 21.1383 17.4515C21.365 17.5143 21.5782 17.6194 21.7671 17.7616C21.9466 17.9006 22.092 18.0801 22.1918 18.286C22.3031 18.5179 22.3587 18.7734 22.3538 19.0314C22.3608 19.3194 22.3055 19.6054 22.1918 19.8692C22.0949 20.0866 21.9461 20.276 21.759 20.42C21.5654 20.5645 21.3448 20.6672 21.1107 20.7218C20.845 20.7841 20.573 20.8146 20.3003 20.8125H19.6277L19.6358 17.3493ZM25.4933 21.9999H27.8434C28.1011 21.9994 28.358 21.9717 28.6101 21.9175C28.8544 21.8679 29.0885 21.7759 29.3021 21.6454C29.505 21.5222 29.677 21.3529 29.8046 21.1506C29.9413 20.9178 30.0088 20.6498 29.9991 20.3788C30.0005 20.1989 29.9703 20.0202 29.9099 19.8511C29.854 19.6914 29.7675 19.5445 29.6555 19.419C29.5427 19.2933 29.4081 19.1898 29.2584 19.1139C29.0969 19.03 28.9226 18.9742 28.743 18.949V18.9325C29.0213 18.851 29.2706 18.6896 29.461 18.4674C29.6474 18.2355 29.7437 17.9421 29.7317 17.6428C29.7446 17.3742 29.6798 17.1075 29.5453 16.876C29.4246 16.6853 29.2569 16.5301 29.059 16.4257C28.8474 16.3157 28.6188 16.2432 28.3832 16.2114C28.1345 16.1766 27.8838 16.159 27.6327 16.1586H25.4933V21.9999ZM26.7575 17.2503H27.6165C27.7171 17.2509 27.8174 17.2603 27.9164 17.2784C28.0126 17.2954 28.1055 17.3277 28.1919 17.374C28.2728 17.4179 28.3415 17.482 28.3913 17.5604C28.4454 17.6505 28.472 17.755 28.4674 17.8605C28.4703 17.9638 28.4469 18.0661 28.3994 18.1574C28.3555 18.2379 28.2926 18.3059 28.2162 18.3553C28.1384 18.4062 28.0522 18.4425 27.9618 18.4625C27.8671 18.4842 27.7703 18.4953 27.6733 18.4955H26.7429L26.7575 17.2503ZM26.7575 19.5839H27.7138C27.825 19.5845 27.936 19.5927 28.046 19.6087C28.1576 19.6241 28.2666 19.6546 28.3702 19.6994C28.47 19.741 28.558 19.8073 28.6263 19.8923C28.696 19.9873 28.7315 20.1037 28.7268 20.2221C28.7309 20.3344 28.7045 20.4457 28.6506 20.5437C28.6009 20.6296 28.5327 20.7029 28.4512 20.7581C28.3691 20.8138 28.2772 20.853 28.1806 20.8736C28.0831 20.8949 27.9837 20.906 27.884 20.9065H26.7494L26.7575 19.5839Z" fill="url(#paint0_linear_1_3)" />
            <defs>
                <linearGradient id="paint0_linear_1_3" x1="0" y1="11" x2="29.991" y2="11" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#90CEA1" />
                    <stop offset="0.56" stopColor="#3CBEC9" />
                    <stop offset="1" stopColor="#00B3E5" />
                </linearGradient>
            </defs>
        </svg>

    )
}