if status is-interactive
    # Commands to run in interactive sessions can go here
    fastfetch
    starship init fish | source
    
    set -gx PATH $PATH ~/.local/bin/
end
