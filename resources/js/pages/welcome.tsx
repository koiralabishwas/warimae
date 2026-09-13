import { Head } from '@inertiajs/react';

// Notice the curly braces around { me }
export default function Welcome({ me }: { me: { is: string } }) {
    return (
        <>
            <Head title="Welcome" />
            <div>Hello {me.is}</div>
        </>
    );
}
