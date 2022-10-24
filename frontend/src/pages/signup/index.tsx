import Head from 'next/head'
import styles from '../../../styles/home.module.scss'
import { Button } from '../../components/ui/Button'
import Input from '../../components/ui/Input'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title> Criar uma conta </title>
    </Head>
    
    <div className={styles.containerCenter}>
      <h1 className={styles.logo}>LOGO</h1>

      <div className={styles.login}>
        <h1>Criando sua conta</h1>
        <form>

          <Input
          placeholder='Digite seu nome completo'
          type="text"
          />

          <Input 
          placeholder='Digite seu email'
          type="text"
          />

          <Input
          placeholder='Sua senha'
          type="password"
          />

          <Button 
            type='submit'
            loading={false}
          >
            Cadastrar
          </Button>
          </form>

          <Link href='/'>
           <a className={styles.text}>Já possui uma conta? Faça login!</a>
          </Link>
          
      </div>
    </div>
    </>
  )
}
