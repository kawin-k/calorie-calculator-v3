export const CALORIE_PER_UNIT = Object.freeze({
  rice: 80,
  meat: 55,
  fat: 45,
  fruit: 60,
  dessert: 205
})

export const CALORIE_FACTOR = Object.freeze({
  normal: {
    specialize: {
      regular: {
        morning: {
          rice: 2,
          meat: 1,
          fat: 1,
          fruit: 0,
          dessert: 0,
        },
        noon: {
          rice: 3.5,
          meat: 1,
          fat: 2,
          fruit: 0,
          dessert: 1,
        },
        evening: {
          rice: 3.5,
          meat: 1,
          fat: 2.5,
          fruit: 1,
          dessert: 0,
        },
      },
      soft: {
        morning: {
          rice: 2,
          meat: 1,
          fat: 1,
          fruit: 0,
          dessert: 0,
        },
        noon: {
          rice: 3,
          meat: 1,
          fat: 1.5,
          fruit: 0,
          dessert: 1,
        },
        evening: {
          rice: 2,
          meat: 1,
          fat: 2,
          fruit: 1,
          dessert: 0,
        },
      }
    },
    diabetes: {
      regular: {
        morning: {
          rice: 2,
          meat: 1,
          fat: 1,
          fruit: 0.5,
          dessert: 0,
        },
        noon: {
          rice: 3.5,
          meat: 1,
          fat: 2,
          fruit: 1,
          dessert: 0,
        },
        evening: {
          rice: 3.5,
          meat: 1,
          fat: 2,
          fruit: 1,
          dessert: 0,
        },
      },
      soft: {
        morning: {
          rice: 2,
          meat: 1,
          fat: 1,
          fruit: 0.5,
          dessert: 0,
        },
        noon: {
          rice: 3,
          meat: 1,
          fat: 1.5,
          fruit: 1,
          dessert: 0,
        },
        evening: {
          rice: 2,
          meat: 1,
          fat: 1.5,
          fruit: 1,
          dessert: 0,
        },
      }
    },
  },
  special: {
    specialize: {
      regular: {
        morning: {
          rice: 2,
          meat: 1,
          fat: 1,
          fruit: 0.5,
          dessert: 0,
        },
        noon: {
          rice: 3,
          meat: 1,
          fat: 1,
          fruit: 0,
          dessert: 1,
        },
        evening: {
          rice: 3,
          meat: 1,
          fat: 1,
          fruit: 1,
          dessert: 0,
        },
      },
      soft: {
        morning: {
          rice: 2,
          meat: 1,
          fat: 0.5,
          fruit: 0.5,
          dessert: 0,
        },
        noon: {
          rice: 2,
          meat: 1,
          fat: 0.5,
          fruit: 0.5,
          dessert: 1,
        },
        evening: {
          rice: 2,
          meat: 1,
          fat: 1,
          fruit: 1,
          dessert: 0,
        },
      }
    },
    diabetes: {
      regular: {
        morning: {
          rice: 2,
          meat: 1,
          fat: 1,
          fruit: 0.5,
          dessert: 0,
        },
        noon: {
          rice: 3.5,
          meat: 1,
          fat: 2,
          fruit: 1,
          dessert: 0,
        },
        evening: {
          rice: 3.5,
          meat: 1,
          fat: 2,
          fruit: 1,
          dessert: 0,
        },
      },
      soft: {
        morning: {
          rice: 2,
          meat: 1,
          fat: 1,
          fruit: 0.5,
          dessert: 0,
        },
        noon: {
          rice: 3,
          meat: 1,
          fat: 1.5,
          fruit: 1,
          dessert: 0,
        },
        evening: {
          rice: 2,
          meat: 1,
          fat: 1.5,
          fruit: 1,
          dessert: 0,
        },
      }
    },
  }
})

export const LABEL = Object.freeze([
  {
    name: "rice",
    label: "ข้าว"
  },
  {
    name: "meat",
    label: "เนื้อ"
  },
  {
    name: "fat",
    label: "ไขมัน"
  },
  {
    name: "fruit",
    label: "ผลไม้"
  },
  {
    name: "dessert",
    label: "ของหวาน"
  }
])