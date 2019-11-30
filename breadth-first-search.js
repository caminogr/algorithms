const json = {
  id: "1-1",
  child: [

    {
    id: "2-1",
      child: [
        {
          id: "3-1",
          child: [
            { id: "4-1",
              child: []
            }
          ]
        }
      ]
    },

    {
      id: "2-2",
      child: [
        { id: "3-1",
          child: [],
        }
      ]
    },

    {
      id: "2-3",
      child: [
        { id: "3-1",
          child: [],
        },
        { id: "3-2",
          child: [],
        }
      ]
    }
  ]
}

const queue = []
const targetId = "3-1" 
queue.push(json)

function main() {
  while (queue.length > 0) {
    const target = queue.shift();
    // console.log('target.id',target.id)
    if (target.id === targetId) {
      console.log('find', target.id);
      return;
    }
    for (let i=0; i<target.child.length; i++) {
      queue.push(target["child"][i])
    }
  }
  console.log("search all node, not found")
}

main();
