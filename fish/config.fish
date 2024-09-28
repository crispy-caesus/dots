if status is-interactive
    # Commands to run in interactive sessions can go here
    
    # tmux a

    fastfetch
    starship init fish | source
    
    set -gx PATH $PATH ~/.local/bin/

    source ~/.config/fish/functions/bindings.fish
end
