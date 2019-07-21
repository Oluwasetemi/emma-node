export const main =  (req, res) => {
    res.json({
      status: 200,
      message: 'hello world',
      data: {
        a: 1,
        b: 2,
      },
    })
  }
export const mainSecond =  (req, res) => {
    res.json({
      status: 200,
      message: 'second',
      data: {
        c: 1,
        d: 2,
      },
    })
  }