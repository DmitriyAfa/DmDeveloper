// Установка классов при первом запуске
const checkClasses = (introList: any,) => {
  let contain = false;
  for (let i = 0; i < introList.length; i++) {
    if (
      introList[i].classList.contains("current") ||
      introList[i].classList.contains("hide")
    ) {
      contain = true;
      break;
    }
  }
  if (!contain) {
    setTimeout(() => {
      introList[0]?.classList.add("current");
      introList[0]?.classList.add("hide");
    }, 0);
    setTimeout(() => {
      // introList[0].classList.remove("current");
      // introList[0].classList.remove("hide");
      introList[1]?.classList.add("current");
    }, 4500);
    // 7000
  }
};

// очистим классы current и hide
const removeCurrentHideClasses = (introList: any) => {
  for (let i = 0; i < introList.length; i++) {
    if (
      introList[i].classList.contains("current") &&
      introList[i].classList.contains("hide")
    ) {
      introList[i].classList.remove("current");
      introList[i].classList.remove("hide");
      break;
    }
  }
};

const addHideClass = (introList: any) => {
  for (let i = 0; i < introList.length; i++) {
    if (
      introList[i].classList.contains("current") &&
      !introList[i].classList.contains("hide")
    ) {
      introList[i].classList.add("hide");
      break;
    }
  }
};

const addCurrentClass = (introList: any) => {
  for (let i = 0; i < introList.length; i++) {
    if (
      introList[i].classList.contains("current") &&
      introList[i].classList.contains("hide")
    ) {
      if (introList[i + 1]) {
        introList[i + 1].classList.add("current");
        break;
      }
      if (!introList[i + 1]) {
        introList[0].classList.add("current");
        break;
      }
    }
  }
};

/**
 * Анимация одной картинки длится 7.2 секунды
 */
export const introductionHelper = (introList: any, isFirstLoop: boolean = false) => {
  if (!isFirstLoop) {
    // Через 7 секунд найдем отработавший элемент с классами current и hide и уберем их
    setTimeout(() => {
      removeCurrentHideClasses(introList)
    }, 3100)
    // 7000

    // Через 13.5 секунд найдем пометим активный элемент с классом current как отработавший с помощью hide
    // После отработки addHideClass отсанется только один элемент с классами current и hide 
    // А все остальные будут иметь только один класс itnroduction__list
    setTimeout(() => {
      addHideClass(introList)
    }, 6100)
    //13500

    // Через 14 секунд добавим current класс 
    // Цикл завершился
    setTimeout(() => {
      addCurrentClass(introList)
    }, 6600)
    //14000
  } else {
    //  Первая картинка появится почти сразу с загрузкой страницы с помощью вызова checkClasses,
    checkClasses(introList)
  }

}