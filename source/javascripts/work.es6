window.onload = () => {
  const nextProject = () => {
    window.location = document.getElementsByClassName('next-link')[0].getAttribute('href')
  }

  const prevProject = () => {
    window.location = document.getElementsByClassName('prev-link')[0].getAttribute('href')
  }

  document.body.onkeydown = (e) => {
    switch (e.which) {
      case 39:
        return prevProject()

      case 37:
        return nextProject()

      default:
        return true
    }
  }
}
