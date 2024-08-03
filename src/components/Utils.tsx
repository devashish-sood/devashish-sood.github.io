const Tooltip =  ({base, hover}: {base: string, hover: string}) => {
  return (<span className='relative group inline-block'>{base}
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-1 text-xs text-white bg-black rounded px-2 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:visible">
          {hover}
        </span>
      </span>)
}

const Link = ({href, text}: {href: string, text: string}) => {
  return (
    <a href={href} className="underline">{text}</a>
  )
}

export {Tooltip, Link}