import { useContext } from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'

import {FiLogOut} from 'react-icons/fi'

import { AuthContext, signOut } from '../../contexts/AuthContext'

export function Header(){

    const { user } = useContext(AuthContext)

    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/dashboard">
                    <h1 className={styles.logo}>Logo</h1>
                </Link>

                <nav className={styles.menuNav}>
                    <Link href="/category">
                        <a>Categoria</a>
                    </Link>

                    <Link href="/product">
                        <a>Cardápio</a>
                    </Link>

                    <button className={styles.button} onClick={signOut}>
                        <FiLogOut color='#FFF' size={24} />
                    </button>
                </nav>
            </div>
        </header>
    )
}