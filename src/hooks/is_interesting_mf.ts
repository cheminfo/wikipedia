export function isInterestingMF(mf: string) {
  // mf should only contain C, N, O, H, P, S, F, Cl, Br, I
  if (!mf.match(/^(?:(?:C|N|O|H|P|S|F|Cl|Br|I)[0-9]*)+$/)) return false;
  if (!mf.match(/C[0-9]+/)) return false;
  if (!mf.match(/H[0-9]+/)) return false;

  const parts = mf.split(/(?=[A-Z])/);
  const atoms = parts.map((part: string) => {
    const atom = part.match(/[A-Z][a-z]?/)?.[0];
    const count = Number(part.match(/[0-9]+/)?.[0] || 1);
    return { atom, count };
  });

  // between 10 and 50 carbons
  if (
    atoms.find(
      (atom) => atom.atom === 'C' && (atom.count < 10 || atom.count > 50),
    )
  ) {
    return false;
  }

  // between 20 and 100 hydrogens
  if (
    atoms.find(
      (atom) => atom.atom === 'H' && (atom.count < 20 || atom.count > 100),
    )
  ) {
    return false;
  }

  return true;
}
