function sumFor(numbers)
{
  let sum= 0
  for (let i in numbers)
  {
    sum += i
  }
  return sum
}

function sumWhile(numbers)
{
  let sum = 0
  let i = 0

  while(i < numbers.length)
  {
    sum += numbers[i]
    i++
  }
  return sum
}

function sumRecursion(numbers, length)
{
  return numbers[length - 1] + ((length == 1) ? 0 : sumRecursion(numbers, --length) )
}

function sumTheSimpleWay(numbers)
{
 return _.reduce(numbers, function(memo, num){ return memo + num; }, 0)
}