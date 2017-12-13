
def invert_binary_tree(root)
  return if root == nil

  root.left, root.right = invert_binary_tree(root.right),
                          invert_binary_tree(root.left)

  root
end
