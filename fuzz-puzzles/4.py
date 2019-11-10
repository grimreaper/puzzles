def h(x, y):
  return x is y+1

def g(x):
  return h(x, x-1)

def f(x):
  if g(x) and not g(x+1):
    raise Exception()

f(256)
