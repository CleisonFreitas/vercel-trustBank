import { ReactDiv } from ".."

const homeLinks = [
  {
    key: 1,
    name: 'Início',
    link: '#'
  },
  {
    key: 2,
    name: 'Sobre',
    link: '#'
  }
]
export const Header = () => {
  return (
    <ReactDiv style={`flex gap-12 bg-stone-200 items-center pl-4 font-bold`}>
      <ReactDiv style="text-2xl text-black">
        Logo
      </ReactDiv>
      <ReactDiv style="flex items-center gap-8 h-full">
        {homeLinks.map((item) => (
          <a 
            href={item.link} 
            key={item.key}
            className="h-full w-full hover:pt-1 hover:border-b-4 hover:border-black flex items-center"
            >
              {item.name}
            </a>
        ))}
      </ReactDiv>
    </ReactDiv>
  )
}
