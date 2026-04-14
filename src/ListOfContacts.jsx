
function ListOfContacts(){
    return(
        <ul className="flex w-3/5 md:w-2/5 justify-between ml-auto mr-auto md:mr-0 md:ml-0 ">
          <li><a href="https://github.com/YaroslavHuryk" target="_blank"><img className="h-10" src="/github.png" alt="" /></a></li>
          <li><a href="https://www.linkedin.com/in/yaroslav-huryk/" target="_blank"><img className="h-10" src="/linkedin.png" alt="" /></a></li>
          <li><a href="https://twitter.com/YaroslavHuryk" target="_blank"><img className="h-10" src="/twitter.png" alt="" /></a></li>
          <li><a href="https://www.instagram.com/yaroslav.huryk/" target="_blank"><img className="h-10" src="/instagram.png" alt="" /></a></li>
        </ul>
    )
}

export default ListOfContacts;