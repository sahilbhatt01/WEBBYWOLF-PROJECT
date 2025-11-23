import Image from 'next/image';

export default function SectionTwo() {
    return (
        <section id="section2" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <p className="text-sm text-[#0546D2]">Lorem ipsum dolor sit amet</p>
                    <h3 className="font-heading text-3xl md:text-4xl text-[#222222] mt-2">LOREM IPSUM DOLOR SIT AMET CONSECTETUR. EU ELIT.</h3>
                    <p className="mt-4 text-gray-600 max-w-lg">Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend commodo in vitae sit amet.</p>

                    <ul className="mt-6 space-y-4">
                        <li className="flex gap-3 items-start">
                            <Image
                                src="/icon/icon.png"
                                alt="icon"
                                width={28}
                                height={28}
                                className="mt-1"
                            />
                            <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.</p>
                        </li>
                        <li className="flex gap-3 items-start">
                            <Image
                                src="/icon/icon.png"
                                alt="icon"
                                width={28}
                                height={28}
                                className="mt-1"
                            />
                            <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non.</p>
                        </li>
                        <li className="flex gap-3 items-start">
                            <Image
                                src="/icon/icon.png"
                                alt="icon"
                                width={28}
                                height={28}
                                className="mt-1"
                            />
                            <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur. Ipsum et ut tortor.</p>
                        </li>
                    </ul>
                </div>

                <div>
                    <Image src="/images/people.png" alt="people talking" width={700} height={520} className="rounded" />
                </div>
            </div>
        </section>
    );
}