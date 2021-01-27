const counters = document.querySelectorAll(".counter")
const speed = 200

counters.forEach(counter => {
  counter.innerText = "0"

  const updateCount = () => {
    const target = +counter.getAttribute("data-target")
    const count = +counter.innerText

    const increment = Math.floor(target / speed)

    if (count < target) {
      counter.innerText = count + increment
      setTimeout(updateCount, 1)
    } else {
      count.innerText = target
    }

  }
  updateCount()
})
