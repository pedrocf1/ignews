import { GetStaticProps } from 'next'
import Head from 'next/head'
import { getPrismicClient } from '../../services/prismic'
import styles from './styles.module.scss'
import Prismic from '@prismicio/client'

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a>
                        <time>12 de março de 2021</time>
                        <strong>creating lalala</strong>
                        <p>in the guide lá lá lá lá</p>
                    </a>
                </div>
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ()=> {
    const prismic = getPrismicClient()

    const response = await prismic.query([
        Prismic.predicates.at('document.type', 'publication')
    ],{
        fetch:['publication.title', 'publication.content'],
        pageSize: 100,
    })

    console.log('response', response)

    return {
        props:{

        }
    }
}