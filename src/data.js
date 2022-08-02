import { FaGitkraken } from 'react-icons/fa'
import { RiCopyrightLine } from 'react-icons/ri'
import crypto from './images/mco.svg'
import swissborg from './images/chsb.svg'
import Kraken from './images/Kraken.PNG'
import Krypto from './images/Krypto.PNG'
import Swissborg from './images/Swissborg.PNG'
import Coinbase from './images/Coinbase.PNG'

export const links = [
  {
    id: '1',
    directus: 'posts',
    image: crypto,
    label: 'crypto',
    referral: 'https://crypto.com/app/vanm2xpay4',
    imageSingle: Krypto,
  },
  {
    id: '2',
    directus: 'kraken_posts',
    icon: <FaGitkraken />,
    label: 'kraken',

    referral: '',
    imageSingle: Kraken,
  },
  {
    id: '3',
    directus: 'swissborg_posts',
    image: swissborg,
    label: 'swissborg',
    referral: 'https://join.swissborg.com/en/r/katharCUVJ',
    imageSingle: Swissborg,
  },
  {
    id: '4',
    directus: 'coinbase_posts',
    icon: <RiCopyrightLine />,
    label: 'coinbase',
    referral: '',
    imageSingle: Coinbase,
  },
]

export const singlePages = [
  { id: 1, label: 'krypto', image: Krypto },
  { id: 2, label: 'kraken', image: Kraken },
  { id: 3, label: 'swissborg', image: Swissborg },
  { id: 4, label: 'coinbase', image: Coinbase },
]
