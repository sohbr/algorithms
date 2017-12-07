def invert_binary_tree(root)
  return if root == nil
  
  root.left = invert_binary_tree(root.right)
  root.right = invert_binary_tree(root.left)
  
  root
end
