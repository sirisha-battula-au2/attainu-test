var lowestCommonAncestor = function(root, p, q) {
    if (!root)
      return null;
  
    if (root === p || root === q)
      return root;
  
    var left = lowestCommonAncestor(root.left, p, q);
    var right = lowestCommonAncestor(root.right, p, q);
  
    if (left && right)
      return root;
    else if (left)
      return left;
    else
      return right;
  };