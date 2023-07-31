import Image from './Image'

export default function Avatar({ source }: { source: string }) {
    return (
        <div className="avatar">
            <Image
                source={source}
                alt='E'
                sx={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '100%',
                    overflow: 'hidden'
                }}
            />
        </div>
    )
}
