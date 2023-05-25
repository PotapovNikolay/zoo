import {Classes, Preview} from '@animals/main'
import Head from 'next/head'


export default function Animals() {

    return  <div className=" flex flex-col bg-main-gray ">
        
        <Head>
            <title>Животные</title>
        </Head>
        <Preview/>
        <Classes/>
    </div>
}