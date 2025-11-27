{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    nodejs_22  # Node.js 22 LTS
    pnpm       # Package manager
    nodePackages.npm
    nodePackages."@angular/cli"
  ];
}
