import { Icon } from '@/components/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
    return (
        <main className='flex min-h-screen items-center justify-center'>
            <div className='max-w-2xl'>
                <Card>
                    <CardHeader>
                        <CardTitle className='flex'>
                            Hello
                            <Icon name='IconBrandPowershell' />
                        </CardTitle>
                        <CardDescription>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, autem.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quo, fugit minus exercitationem
                        in illo eaque eveniet sunt consequuntur, vel sequi itaque minima fuga totam adipisci laboriosam
                        incidunt ab a optio aliquam, ratione corrupti aspernatur. Sequi officiis fugiat vitae alias ea!
                        Aperiam minima consectetur quas quae impedit ipsum aut sed?
                    </CardContent>
                    <CardFooter>
                        <Button>Hello</Button>
                    </CardFooter>
                </Card>
            </div>
        </main>
    );
}
