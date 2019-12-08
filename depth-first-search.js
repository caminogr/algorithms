const json = {
  id: "1-1",
  children: [

    {
    id: "2-1",
      children: [
        {
          id: "3-1-a",
          children: [
            { id: "4-1-a",
              children: []
            }
          ]
        }
      ]
    },

    {
      id: "2-2",
      children: [
        { id: "3-1-b",
          children: [],
        }
      ]
    },

    {
      id: "2-3",
      children: [
        { id: "3-1-c",
          children: [ 
            { id: "4-1-b",
              children: []
            } 
          ],
        },
        { id: "3-2",
          children: [],
        }
      ]
    }
  ]
}

const stack = [];
const targetId = "4-1-a" 

function main () {
  stack.push(json); 
  while (stack.length > 0) {
    const current = stack.pop();
    console.log('current', current.id)
    current.children.forEach(child => stack.push(child))
    if (current.id === targetId) {
      console.log('find!')
      return
    }
  }
}

main();
