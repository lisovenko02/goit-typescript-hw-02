/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface ClassInterface {
  title: string
}

class Component <T extends ClassInterface>{
  constructor (public props:T ) {

  }
}

class Page extends Component<ClassInterface> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};