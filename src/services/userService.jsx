import axios from "axios";

const defaultImage = '/9j/4AAQSkZJRgABAQEB9AH0AAD/4QA2RXhpZgAATU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAaABAAMAAAAB//8AAAAAAAAAAP/bAEMAAwICAwICAwMDAwQDAwQFCAUFBAQFCgcHBggMCgwMCwoLCw0OEhANDhEOCwsQFhARExQVFRUMDxcYFhQYEhQVFP/bAEMBAwQEBQQFCQUFCRQNCw0UFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFP/AABEIAQABAAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AIF+Kfifwidnirw+7QLwbuEbOP8AeBaNmPpuX6V2WgfE/wAOeIWSOHUFtbluBb3n7pyfQZ4Y/wC6TXVEZGCMiuP174TeGdeVy2nrYzN1lsf3XXqSuNjH3ZTX4x7TDVfjhyvvHb7n/mfr94vdW9P8n/mdB4i0v+3NA1LTsgfa7aSDJ6DcpXP61wnwn8V2Wn/DCO61G4W1gsppY3eTrlm8xVAHJOJAABySOKpr8O/F/g75vDPiD7Xar0sbvgbR/CAcpk/7Pl/WvnTxtq2oabM2lb5LdxI7zosgwkoPlvswSATswWBPAGD3r1cDgI4tOhComrp+fW+hM5Qp0pTk9Fb17fr6eZ6L8UP2irzUHm07RN9nByrFWxKf99wfl/3FOeOWGcV4ZdXM15N5s8hkfoOyqPRR0A/yaiVQoAUAAdhS1+hYPA0MFDlpL5nymIxk8R7q0j2/z7/l2SCiiivQOAKKZNPHbrukYKOg9SfQDuarNLPcfcH2eP8AvMAXP0HQfjn6CgVyxNcx2+N7YJ6KBkn6Acmq7TXE/wB0fZk9Thn/AC6D9aWK3SHJUZZurMcsfqTUlAiKK1jifeAWk6GRzlvpn09ulS0UUDCiiigYUUUUAFFFFABRRXSeEfhv4o8eSBfD+hXuqKTt86KPEIPoZWwgP1IrKpVp0Y89SSiu7dg30RzdFfS3g/8AYg1/UNk3iTWrTR4jybezU3M30J+VVPuC1e3eEf2U/h34V2PLpT67cr/y21eTzgfrGAIz+K18piuKsuw2kJOb8lp97svuudEcPUl0sfBmh+HNW8T3RttH0y81W4BwY7KB5mX6hQcD3NeueFf2QfiF4h2SXlrZ6BAed2oXALkeyR7jn2bbX2rq3iPwt8N9LjGoahpfhywQfu45ZI7dPoi8Z+gFeNeMP24fh/4f3xaQt/4kuBwDbQ+TDn3eTBx7qrV4H+sWa5g+XL8PZd7N/jol8zV0aVP+JIzfC/7DegWeyTX/ABBfapIOTFZxrbRn2Od7EfQivWvDPwF+H3hLY1h4VsGlTpNeIbmQH1DSliPwxXyR4u/bv8a6xvj0LTdO8Owt0cqbqdf+BNhP/HK8V8WfFjxl463jXvE2pajE/wB63knKw/8AfpcIPwFaLI89zDXG4jlT6X/SNl+Jm8RQp/BG5+kvij43/D/wMrRar4q0u1kiGDawyiaVcdvKj3MPyryHxR+3n4L0vfHouk6prko+7I6rbQt+LEuP++K+DKWvUw/BuBp615Sm/uX4a/iYyx1R/DofTHib9vTxrqW9NG0jStEibozq9zKv0YlV/NK8r8RftDfEnxVuF/4x1RUbrHZyi0XHpiIKCPrXndFfTYfJ8vwv8KhFfK7+93ZySrVJbyP1CoZgqkk4A5JNQ3t7BptpLdXUyW9vCpeSWRtqqB3Jr5i+M3x4m11ptH0YtDYfdfcMNL7yDsD2j9OW67a/KMFgauOqclNer7H30pRhFym7JHTfGH9oCKyjk0rw/MXZxh7uFsM46Hy2/hX/AKadTzt7NXzbdXUt9cNPM26RgF+UYVVHRVHYD/PNRu7yyPJI7SSuctIxyWPvSV+qYHL6WAhywWvVnzWKxksR7sdI/n6/5dPxCiiobi6S3wDlnb7sa8s3+fXpXqHmk2cfSqjXjT8WwDL/AM9m+7+A/i/l70wwvdc3JG3tCp+X8f738vbvU9AtyKO3WNt7Eyy9DI/J+g9B9KloooGFFFFAwooooAKKKKACiuz+H/wd8XfEyVf7B0iWa0zta/n/AHVsvr+8PBx3C5PtX038P/2KND0ry7nxbqMmt3I5NnaFoLYexb77/UFPcV4OPzzA5fdVZ3l2Wr/4HzsawpTqbI+QdD8Pap4o1BbHR9OutTvG58m0haRgPUgDge54r3jwN+xZ4q1zy5/Ed7beHLY8mBcXNx9CFOxfruP0r6zkm8H/AAj8Pje2k+FdJToMpbozY/Dcx/EmvEfHn7c3hXRfMg8MaddeI7gcC4lzbW31BYFz9Noz618bLP8ANc0bhltHlXff8X7qOj2NOnrUkd74J/Zd+H/gvy5P7J/ty8X/AJedXIn59RHgRj67c+9df4u+JnhD4b2qjXtd0/R1VBstnkHmlR02RLliPoK+CvHP7VfxF8ceZEdZ/sOyb/l20dTBx/10yZOn+1j2rxe/hkmuJLoO8k0h3SMxLFz6n1P+frVPhfF4ySq5lXb8lq/vei+SZEsVGCtSifcHjb9vfw9pvmQ+FtDu9alHAur1hbQ+xAwzsPYha8B8aftcfErxl5ka60ug2jf8u+jR+QR/20JMmfow+leLxyCQeh7j+v0p9fY4Ph3LcHZwpKT7y1/PT7kcE8TVqbsmvb651K6kuru4lu7mQ5eady7sfUseTUNFFfSJJKyOcKKKKYgooooAKKKKAPof4xfGm88YXz2FizW2nwv8seeQR/E3Yv8AovTk5NeS7dv8+T1oVQowOAKWvLwuFpYOmqdJHs4nEyxErvRLZf11/rYKKCcA9hVF5nvuI2Mdv/z0HDP/ALvoPf8AL1rsOMfNeM7tFbAM4OGkblU9vc+354pIbdYcnJeRvvSNyzf59BxUkcaxIqIoVV4CqMAUtAW7hRRRQMKKKKACiiigAore8G+Bdd+IGrrpmgabNqN1wX8sYSJT/E7n5VHuTz0GTX1z8Kf2OdE8NiHUPF8kfiDUhhhZICLOI+hBwZf+BYXn7vevCzLOsJla/fSvL+Vb/wDA+ZrCnKpsfMfw3+Cni34qTKdF00rYbtr6ldEx2yY6/Nj5iPRASO+K+sPhr+yF4S8H+Vd67/xVOprg4uU22qH2iyd3/Ayw9hW/8S/2jfA3whhbT5Llb/U4F8tNI0oKzRYGArkfLGBxwTnHRTXyR8Tf2t/G/wAQPNtbK5/4RjSXyPs2muRMy/7c3DH/AIDtB7ivjnWzrP8A+CvY0n12uvXd/KyN/wBzR31Z9lfEL47+BfhLCbXU9Uh+2QqFTSdPUSzgAcLsXhBjpvKivl34iftw+J9e8228K2UPhuzOQLqUCe6YevI2J9MMR2avmmSQ8ufmJOST7nk123wc8Aj4nePrTw592S8tbzyWJwFmW1leIn28xUz7Zr2cFwxgcGvaVl7SS77fd/ncwqYqctFoc1rniDU/E2oPf6vqF1qd6/DXF5M0r49MsTx7dKz6fNDJbTPFMjRSxsVeNxhlYHBB9waj3fMR3FfYRjGKUYqyOQWiiiqAp3FviUFOC2dvpu6kfQ/zHvTFbcM4wehB6g+lXJkMkTBfvdVz6jkfrVa4xtW5ThGALj27H8P5fStIytoZyXUSiiitzMKKKKACiiigAooooA66kZgilmO1QMknoBQWCqSTgDkk9qqMTeMGYYhByqn+L3P9B+P05ztGtuvvvDbb9kPV/c+3t+fpU9FFABRRRQMKKKKACiiuh8D+Add+I2tppWgWD3tycGRvuxwr/fkfoq/qegBPFZ1KkKMHUqOyW7Yb6I570r6G+Df7I2seMBBqviwzaDo7YdLPGLuce4I/dL9Ru9hwa9t+Ev7OPhj4O2sWta3NDq2voVxeTr+6t3JACwIf4iSAGOWJ6YziuV/as/aA8T/DtdN0bQYE0mbU4Hna8nAa5SMNtUqhGELfNy2WAHRT0+CxGdYvNKjwuURsus3p93b8+yOr2cKa5qv3HoviTx98Of2a/DcWnDyNOwu+HSdPUSXU56biCcknH35CM4618k/Fj9rjxf8AEQzWWmSN4Y0Rsr5FlIfPlX/ppNwefRdo5wd1eI3+oXOranNd3lxNd3cuXmnuJC8kjE9WYnJPHU1HXpZfw7hsI/bV/wB5U7vv5L9XdmNTESnotEFFFFfWHKNm/wBU/wBDXvn7Etl9r+PVjIBn7LY3Mx9gU2f+zivA5f8AVP8A7pr6h/YB03zvihr9/jIt9HaHPoXmiP8A7TNYV3alIDhf2uPAo8D/ABu1kwx+XZauF1SDA4/eE+Z/5FWQ/QivF2+WRT6jH9R/WvuT9v8A8Hi98JeHPE0SZlsLprKYqOfLlXcpPsGjx/20r4t03w5quuXUUGn6fcXk7bmWOJCSwVSzY9cKCcD0pYefNSTYFCitqDwnfTKCTFGDz8zZ/lmraeCpD9+7Vf8AdTP9a6DT2cuxzVRQD5ZIzyFYj8Dz/Wuv/wCEJX/n8P8A37/+vVVvBhW9ZVux80YZcx9cEg9/daA9nLscgq+UzRH+Hp/unp/h+FOrd1vwpdWNv9r3xyJF9/aTnae+MduD+dYVdEXdHNKLi7MKKKKsgKKKOT7mgAor2P4W/sk/Ev4sRpdadoEunaSRuOpaoDBDt9VyNz/8BBr6r8Cf8E8NJ8J2dpq+synxndLhns1Bit1PptB3OPqfwrgr46jQ0bu+yLjFyPhNn+2Nx/qFP/fZ/wAB+v06y0iqFUADAHAA6UtbnUFFFFAwooooAKKkt7eW8uIre3iknuJWCRxRKWd2JwFUDkknsK+tvgV+yLHafZ9d8eQLNPw8GhkhkTuDORwx/wBgceuc4HkZlmmGyul7Su9ei6v+u5cKcqjtE8q+CX7NOt/FV4dTvzJo3hjOftjL+9uR6Qqeo/2z8o7bsEV9I+MviV8P/wBlnwtHo2mWkb6iU3w6RasDPMxGPNnkOSoOPvNkkD5QcYHEftAfteWnhNp/DPgR4bvVY1MU+qKA0FpjjbGOjuPX7q4x8xyB8XahqN1q99Pe31zLeXlw5kmuJ3LvIx6lmPJNfJ0sFjOIJLEZh7lHdQXXzf8Anv2sbSqRo+7T1fc+kfg38RPE/wAff2kvDNzr10W0/T5Jr6PT7fK29sEifYVXPJ3lMs2Tz1xgVnft1akb743RwZ+Wz0m3g2+5eSTP/kQflXW/8E+/C5uPEnirxG6YFrax2ETHuZX3vj6eUn/fVeZ/tjXBm/aG8ToefJS0Qf8AgLE3/s1fW0KVOjVVKjFKMVsjhbcndniMbbppsfwkIfyz/wCzVLXVfELwv/wiN1olkU2STaRaXsgxzunTzSD7jfj8K5WvST5ldEoKKt2Gl3OpSbYIyw7ueFH411GneE7e1w9wftEnp0Ufh3pmsYOWxycOm3N8AIYmYblBbovUd6+7/wDgnF8NN0fjnU7yU4Y2dunlD085mGT/ALydq+UpFCyW6KAAGJ2gcYCn+uK/Rz9hPwydD+Bq37ptfWdSuLwZ67V2wD8Mwkj/AHs965sQ/cswqxVON+pJ+034AN58KfE1oqmeIWhvIMj5t8JEoX6nZj8a+J/2fW2/GrwicZ/0mQfnBKP61+gXx9+JNtoOm2vhHS7WPXfHPiH/AEfStGzkDOQZ58fchQBiT3CsB0Yr8Ifs++Fr3T/2iPD+hT/vb7Tbu9t5zjGXgtrgMQP95DXLTXLTmhUp3jJM6f8Aae+Cq+D9SbxVosGzRL6XF3BGPltZ2P3h6I5/JuP4lA8Er9Evi/o6+IPhV4v08j5p9KuQhHVXETFGHuGAI+lfm14f1X+1bAM5HnxnZKPf1+h6/p2rXC1HOFn0OinL7LNOq03y31s56MHj/E4b/wBlNWarXX+vs/8Arqf/AEB67Ddk00KXEMkUi7o5FKsvqCMGvKbi3ezuJYH5eJyhPrg4z+PWvWa5DXPC2o654qt7XSbC41G8v1Hl29rEZHdxwcAe22tKbs9TlxEbxUuxyNWNO0271i8is7G1mvbuVtscFvGXdz6BRya+w/gv/wAE5fEHibyNQ8e3/wDwjti2G/s61IkumHozcqn/AI8fpX3V8KPgJ4H+DtmsPhjQLaymxh7118y5k/3pG5/Ace1ZVMXCOkdWcPKz8+fg5/wTr+IHxA8i98TNH4M0l8MVul8y7ZfaIH5f+BEfSvuj4O/sW/DD4PLDc2uiLresR4P9p6xieQN6qpG1PwGfevbYU2rk1OXDAAV5tStUqbvQhjVt0ZSu0BcYxjimafpcdiziPhGOdvYVajWpVrlVJXuyeZn4I0UUV9EeiFFFFABW14P8G6x4816DR9CsZL6+m52rwqL3d26Koz1PqB1IFdF8Jfg3r3xe1o2umR/Z9PhYC71KZT5UA9P9p8dFHtkgc19vaJ4f8D/s1eAbi5eaPTbCFQ13qNz8091IAcZwMsx52oo4ycDrXymcZ9Ty9+woLnrPZdvX/Lc3p0nPV6Ixfgz+z7oHwX01tX1KaC+15Yme41SfCxWq4+YRbvuKBnLnkjOcD5R4F+0b+1lP4uN14a8GXElrofMd1qaZSW8HQqndY/U9W9hkNxfx4/aZ1r4vzy6bZCTSPCqvlLEN+8uMHhpiOvqEHyjj7xANcb8Ffh+3xO+KGgeHiha1uLgPdkdrdPnk57ZVSoPqwrzctyWpKp/aGavmqbpPZfp6LZfkVaytyUtEcHbMJI/MHIf5h9O36VLVvViG1S8IUKDM+FUYA+Y8Vc8I+Gbrxl4o0nQrL/j61K6jtUbGQpdgNx9gDk+wNfc30uzi6H6C/sY+Dz4V+B2nXMibLnWZ5NRfI52khI/wKRq3/Aq+Rv2rrWTUP2lvFttGcSTT2cSH3NpAB/Ov0h0fSbbQdIsdMso/Ks7KCO2hj/uoihVH5AV8I/GbwrPrX7Zxh27Le61jSIzIw4O6O2Tj1rycPPmqyl5MfQw/2zdJFj8bjaWsR8saZarFGoz8qqVA/wDHa8u0rwiBiS9OT18lT/M/4V9W/t1eHbfQvjVpzwJxPoNuWkblmYT3APP0C18816FH+HFHRShGS5hscaQxhI1CIvRVGAKdRRWp1EO15b5VjRpHVMBFGSxYjAHv8v619vfF747an8AfC/hP4ReA7Zb3xpFp1tb3NzHF55glZQAI48EPNIxL4IIAZTht3Hzd+yt4NPxE+PWh2bx+ZaWN4L24OMjyrdRJyO4MhVD/AL1fozoHwV8G+EfHGteN4dPEniPUZHnn1O+maVogR8wj3HEa444wccZwAK5askmkzzsRK8kjhv2aPgDefDqG78W+MrqTWfiJrS5vLu4l85rWM4IgVyTk8DcRx8oUfKoJ8m8G+FV0v/goJrscSYihE+pDj/ntaKWP/fc7CvsPT9Vg1TzGtt8kC4xcbSI5M5+4T94dORxzwTzj4i+MX7Rvhj4CftWeKvErwHxHftoK6dDZWMyYFzugLLK/Pl4WMZ4LfMOKwg5Tb80c0ZWufS3jnR1gbUbXb+5uIXKj/ZZSMfnkV+OvhfUTY39uzHEU4WN/x+6fz/ma/abxs4vvDFpq2zZug3suc4DJu6+39a/EWFf9GRTx8gH6VWEVnJehtGWzPVKrXX+vs/8Arqf/AEB6Zo99/aOm29wfvsuHx/eHDfqDT5/nvLVP7u6X8ht/9nrvPSvdXLNewfsl+J18MfHbw+ZCFg1ISabIx/6aLlAPrKkQ/GvH6t6Pq1x4f1iw1W0/4+7C4ju4ecfvI3Dr+qipkuZNBJXTR+wtvDitG3iqnot5BrGm2d/at5lrdQpPE/8AeRlDKfyIrYhjwBXnqB5EpD0h3LikEexsVajXC1Cqlm4FNwMLk8UeIi3eoy1WG/dw4J5qhJMF71fLYzufg1RRRXpnrhXsXwI/Z11P4tXSajemTTPC0b4ku8YkuSDykOfyLngdOSCB037PP7MM/jo23iPxVFJa+HeJLezOUkvh2Y91i9+rdsDBP0L8Zfjh4c+A3h2C1jhhm1VoQmn6LbYQBBwrMB/q4xjHTnGAODj4PNs9qOr9Qyxc1V6Nrp6efd7L8uqnSVuepoi/4u8ZeDP2cfAcCtFHYWUKmOx0u15muX6kKCck5OWdj3yTk8/n98ZfjJr/AMYtZN/rE3lWiNstNOiY+TbIxAwP7zHux5PsMAZfjrx5rfxI8RXGt69eNeXsvCjpHEmeI41/hUen1JySSeUu/wB5PbRdi+8/gMj9f5V35PkVPL/39Z89Z7vt6fq92YVq7qe6tEW6+0P2A/h75Njr/jW5iw87f2ZZsw52Lh5mHsW8sfVGr40s7We/u4LW2iae5nkWKKJBlndjhVHuSQK/WH4W+B4fhv8AD3QfDcO0/YLVUldejzH5pX/4E7Mfxr3MZPlhy9zn6n5SawnlaxfIeqzuP/HjXv37GfwdPxF8XalrM91qGnW+jxBLe502YwzfaZcqNrYPRBJkf7a14v4u0mZfHniGxjTLwajcxNngLtlYEk9ulfq7+yJ8F4fg/wDBnQ7a5gxrl+n9o3zOMMksoBCY7FUCIfdTWlaTVOy6kN2SuYEf7KOq3luZR8VPG1hI33YpL5JQv1win8M18r/Gf4P694U/aE0PwvN4z1HU9X1i502S18Q3QYXFv5k6wxsMPnMbREjDDoMYr9K9S1S00e2+0XtxHbQ52hpGxk9gPU+wr5H/AGpFt7343fBnxPYWt/LjWbSxm82yltw5W8ikiVGlVFYndN37Z6VzUZNOxEJe9954H+0h8GPF/wAJdc0afxX4yufGjarBKltdXU08rwiFlLL+9dsA+cDgHsa8gr7Z/b88/UPCHhi6urW2sZre/ZYYpLxGuGjkjO8+WB2aOPJVmHNfE1dlOTlG7O/Du8Arb8H+CNf+IGsJpXhzSbnV79sZjt0yIwTgM7fdRc/xMQPevcv2dv2QdU+KK22v+J/P0Xwo2JIowNtzfr22Z+5Gf755I+6MEMPvfwj4M0PwHosOk+H9LttJ0+LpDbpjJxyzHqzHuzEk9zWdSso6LcmpiFHSOp4p+zF+y7P8CdR8Q6nf6haX+oXq/ZbNrZGxFAGLFnJxl3bYWA4Gzg88ZP7Rn7QEP7Pax6prvhbWfFT3Fw0GnPdXMEFjvVd2QgJbcOz+T7BzX01Xxh+3h8Gp/EnhnXfiL4s8QyDRPDkUEGj6Dp8Z2J51xDHJNO55ZmL/AHVAwEX5jg55oWqTXOec25bnyp8Xf27Pih8Vo5rKPVI/Cmjy/KbPRSYWdT2eYneeOuCqn0rU8e/sO678M/gbq3j3xBrNu2rWzW7/ANlWQ81BHJKkZLS5wW/eA/KCOD8xrg/gLpPwfv8AxV4j134q6nc2vhnSrdZLDQbMSC41aRiQqKy8qoC5PzLyy5YAGv0gt9Ktvix+xn4VmCvIutQaJa7HbcUBvbaJyx7kYYn6GvXjGMYuxzVXKMkl3PUfH0H9n/CXW1PDWekSP9DHET/7LX4hqNqgDtxX7Y/H7UP7K+BfxDu84aHw9qDL/vfZ3wPzxX4nVwYZbs7aZ03gu8w1zaMev75P0Df+y/ma6GL95fTP1EarGPY/eP6FfyrgdNvTpuoQXOCyo2GVepUjB/x/Cu30Fnl0uKWT/WSlpG+rMTj8On4V1s9ClK6saFGecd6Ki3broj+6gP5k/wCFI6D9Wf2UfEH/AAlH7Pvgq6Lb3gs/sDev+ju0Az74jB/GvYoo6+W/+Cdusf2l8HdY092+fT9ZkCr6RvFEwP8A315n5V9WBdtYcup4NX3ZNCqoxS/Ko4GKp6hq9lpMDTXl1DaxqMl5nCj9a8T+IH7YngLwXO9tBePrt2vBi04eZz6ZHFPSOrOe0pbI9xlYdzms+5ZFBJOBXxp42/b+v/JddB8Mx2II4uNXuAuPfYK+cPHn7V/jnxY0i3ni6aKJv+XfSk8tfpu4rP2kH8OpSpt9T56JC8ngV9Ufs5/stm/+y+KfGtoRa8S2WjTrgydxJOp/h9EPX+Ljg637N37MI037J4s8ZWmbziWw0mZf9T3EsoP8fcIfu9T83C3f2kP2rYPBf2rwz4PnjuvEHMd1qC4eOxPQqvZpR+Snrk5A+LzPNq+Y1nluVav7UunnZ9u7+SPooU4017Sr9x037Qv7TGm/CO0k0fSPJ1LxXIny2/WKzBHDy4745CdTwTgYz8B694g1DxTrV3qmrXsuoajdP5k1xM2WYn+QGMADgAADAFVbq6nvrqW5uZpLi4mcySzSuWd2JyWYnkknnJqtHzJN7Nj9B/jX0WU5PQyqnaGs3vLv/kjlq1pVXrsSVVi/fXZk6jBx9OgP/oX51LOxOI1OGfuOw7n/AD60yNhGJHC5GfLRR7cY/PNe8c59J/sT/Cs+NPiMfEt5Fu0rw9tlXcOJLps+UP8AgPL+xCetfozomgT6zL8v7uBT80pHH0Hqa+E/2I/iR4Z+FPgfxtqvjW/l07SI7yyKtFbySvPNKk+EUIDgYgPzHA4AzzXo3jb/AIKiaHpsbWngjwXdXgQbUudXmW3Qe/lR7iw/4Epry6tKdWq9NERKfLp1OZ8M/A+HxV+2Rr/h8227SrXWbjV9R3DO6DzPNCt6h2kjTHo5I6V+gXiDxRo/hPT2vtc1ax0eyXrcX9wkEY/4ExAr8dvEH7XHxI1Xxd4n8R6dq0Xhe+8RGH7d/YsIiyIoxGgR23SIMDnDDJ5PbHlGv+KtT8TXzXutateavet964vrh55D9WYk11OhKduZmcpuVvI/Vf4jf8FDvhP4IEsOl3l34vv14Eekw4hDe80m1ce6bq+Mfj5+3Z4v+NEdhZ2el2PhfTtO1CLUrNoC093HPHnY/mnAyNxxtQfjXE/svfA/Tfj54/bw/q2tXXh6P7K11btHahzebCA8aMWAVgDu6NwDxxX6L/DH9jP4W/DWSGWz8OLruppjbe60RdSZ9QhAjU+6oDXRTw8VqctSsqbs9z4x+A+l/GT4oeEfGmnweEJvFmmeI0jnuPEesyGK4WSF1kj8u6k5lG5APLGRk9VySfpb9m39jFNNNr4n+Idok14MSWmgSYZIu4e47M3pH0H8WTwv13aabLp8K+YgjVvuoOwH8qmrjrzcZuCN6VWTp6aXCiiiuMYV4t+2doUviL9l/wCINnDG0si2K3IRRknypY5Tx9Er2ms/xDosHiTQNS0i6/49r+2ktZcf3XQqf0NOL5WmONrq+x+BcMN3rjJDGgka1t26cYRctz+ePyr9p/2O9NWP9kX4aRXSeY32Pz0DdiZpHU/gCMfhXwHqnwvnsfEF14Y0zRJJNba7Nm1vFbqJpZAxBztHI6nPTHNfpz8NfCo8AfC/wf4U3LI+i6TbWMrp915EiVXYfVgT+Nd7rJwkexm2XfUvY3nzOWvy0scB+15eGy/Zr+IEgON2nGL8HdUP/oVfjjX7IftcabJqn7NnxBhjUs0emNcHH92JlkY/gEJr8b6WH+Fnl0wr0fTI/J061T0jXP5V53DGZpUQdWYCvTFUKoA6DiupndR6sWokX/SJGLIcqoAVskAZ6jtyTT5JFijZ3O1FGST2ArJs/EjahJptqbeOFUWUZUfMWc7zk/8AATUO+lkazlyyiu59L/stftFXPwTsfFtpBpUeotem1mR57gRRxFfOBz6546eldD43/b08V3yyRQataaaDx5elwb3H/A3r488R3BhvkUMQDEMgHryaxJLz3rGUJSl8VkedVivaNnrHjD47634quGlvLu6vyTndf3LSf+O5wK43UPiNqtwpRLhbWP8Au26hP5Vx014SSc1Tku/el7GHVX9TJ8psXOrSXDFpZWkb1ZiTVZr/AN6xnvPeo/tfvW3KTzn2b+0h+1sZ/tXhfwHeYj5ivNcgb73YpAR27GQf8B7NXyNSUVwZfl1DLaPsqC9X1b8zvqVJVHeQVBDII4Xdj/G3/oWB/Kp6r2cO7LEl28x9o9PmPQV6hiJIzQxNI3EshAGBnb6D3x+tdN4Z8KmXy7q9QpGo/dQN1x6t9f8APvf0Dw2IdtzdrmTqkR/h9z710lK51U6XWR7l+yh4N0X4pa14w+H+vIf7M1zQnKumA8U0M0RjdP8AaXczDt8pB4JFfOPxu+BniL9n/wAdPoXiK38y2LeZZ6hEp8m9hB+8h7HHBXqpP0J90/ZV8Rjwz8f/AAfcO22G4uWsZB/e86NokH/fbofwr9D/AIvfB/w18bvBtz4c8TWf2i2k+eG4jwJrWXGBJE2PlYfkRkEEHFc0qjpz12ZyYhWqXPxg8Zavoy6ILTTxbvJMVbMCj5ADnJPr7dah8I6o3wr17wf40isNN8QosjXK6dq0Hm2zvGxUpImRkDKsD649K639or9l7xX+zz4qFpqsLXug3c2zT9chQ+RPnkK39yTGcofQ4yOa831Xw7q9jcjTPJuLuKN2aERIzKd2MlQO52jP0rq5k7WZtTj7SnOThfZK3R3/AFSaPsiP/gpv4v8AHPijwlpd/wCHNA0PQU1e0a8mtUke4SESKsgjZn2pmMuv3TwSM4Jr9TLPT4LFdsMYU92PJP41+ButfD86f4ZhuljaDUraPzJ0Oee5+hH9K/fS3lxZxSSnadilifXFXTqKabR5+YYGeClCM1ZtXKWtH5oR9f6VmVa1C6F1MCv3VGB71VryK0lKo2iKacYJMKKKKxNQoooZgqkk4A5JNAECWFtHdyXSW0KXUg2vMqAOwHQFupFT0AhgCDkGigLt7mf4i0O28TeH9T0e8Xdaahay2ky+qSIUb9Ca/C3XtJufDur3+l3i7LyxuXtJl9JEcow/MGv3ir8Zf2sNMj0j9or4gwRLhW1iS4IHrKwkP6ua7MM9WjSG553ocPnatar/ALe78uf6V6DXGeD4fM1N5COI4yfxPH+NdnXaz0qK90yvEsxj0uSNThpOD/u/xfpx+Na0Hgk6boP9qCPzDHLDJ5hzlI5PkH6tXMPG3iTxY9tEd0dnHg88bj97+g/Cvo/xx4Lu9I+B8eqzYSOYWMKr3OJYz/Q1lyucrJ7as4KtTmrJLufMPjC426wqZ6QLn/vpq56S6981Z8UXnn69ekH5VYIPwAB/UGsOWbrWtiKsvfZYkmZs4BP0FVWaSTJCMwHXArp/h/YvrN5cWqgbVKTO/cBTWpo9nHqWpXqkbYmmlTgdggFKvahR9szklNI87kmKMQwIPcGmCevUtY8L2C6it4IgWcgOp6HoOlYPxA8M2ljpwvbZBEyEK2D97JrzaeOp1JRjbcxVVO1ilRTVbczj0bH6CpY43mkWONS7scBVHJr1D1xEVpGCqpZicAAcmur8K+H1s7dbmcBrgsxC9k+Y/rVrQvD6aaollAe5I69k9hWhp/8Ax7kekkg/JyKR1U6dndlmikZtqk4zgZwKFYOoZTkEZBpHSW9L1S40PVLLUrQ4u7KeO6gbOMSIwZT+YFfsJ4f1q28SaDpur2Tb7O/to7qFvVHUMp/Iivxxr9H/ANiXxwPFnwRs9Okk33egzvpzgnnyx88WB6BHVf8AgBrkxC0TOHFR0Uj2Pxp4J0T4heHbrQvEOmwarpdzjzLe4QMuQcqwz0IIBBr5I179ifxZb65etpOqaTeadK+6F5QbaRVx91kSPbkeq9euB0r7Sorjuy8DmFfL5OVB79z5A8M/sHy3mrW1z4u1y2ksY8ebYaajMZxnlTIwXaD0OFJ69OtfYk1xJP8AfbI7DtUVFHM7WM8Zja2Omqld3aCiiikcIUUUUAFY3jBLuXw3fR2S7rh1VOvKqWAdh7hSxH0rZopAUdBV10azEn3vLHX07fpV6iigAr8Yv2oNSXxF+0F8RruJtyRazPEWHfypBF/Na/X74geMrP4e+B9d8TX5AtNKs5bt1Jxv2KSEHuxwo9yK/Eua6uNXtdc1S7fzbu5mWSWT+87yhmP4k124datmtON2zT8Fwbbe4mx95go/AZ/rWvrGpJpOm3F2/IjXIX1boB+JwKg8NwfZ9HtwRgsC5/E8fpiuwsf2c/Hfxn8Otf8AhqKx/s61uDG63dwYnmkCg4T5cEANySRyfY41rYijh4+0ryUY92elrGn7q1POfg0r6h4hu1J3zypuLHuSck/ia+0v2kLmPRf2atBMvCedb5Hc7Y2fA9/lr568Efs++OvhNr0E/ijRTp0F7MttBcxXMMys+CcYRyV4HUgDt1r6x/aS8Lw3/wCzrJa3MKSyWkSTRFx9yRVxuHvgkfjWuDqUsVKdSjJST0undHiPmhVXMj8wpp3mkeSQ/vHYu3+8Tk/rVSaSnyMdxqrM1bDketfs42C6x4m1i1bH7ywYDPY7hVnR4FgutSYEER3kyDHfBC/0rF/Z/wBZGi+ItTuicJHa7mPtuGa09J86x8L/ANqzoTDcNLc7l5yC7GufNFJ4GCiupw1dmZviTVDH4l0q2B4kDE/mMfyqP4jSFvC83s6/zrm77xRBd69JqEKST28MKqhCHliwOPatbxzdNdeDXlZPLZijMh7c9K+cjTdOpRurbfmZ2s4lGzhkubh4olLuz4Cj/dFd3oehR6XHvbD3LD5m9PYVH4d0ePS/tOcPPvAaT/gCnA9q2a+oPq6dPl1e4VW0/wD1D/8AXWT/ANDarNVrTiW7XsJePxVT/MmkbdSzVHSbjzEmt2/1ltIYiO+3qh/FcVerntRn/sfxFDcni3uk2Sf7ynGT+BX8jQTJ8tmdDX0j+wr8QP8AhF/ivPoE8m2z8QW/loCf+XiLLpj0yplz9BXzdWh4e1668L69p2sWRxd2FxHdRDOMsjBtp9jjB9iaznHmi0KpHmi0fsbRWP4N8TWvjLwrpWt2Unm2t9bR3EbeoZQQf1rYryzxgooooAKKKKACiiigAorDXxppbxriWQ3DO8Ys0iZ59yHa42KCcKeC3QZGTW4DuANABRRXj37T37Q2nfs9/D+TUWMd14ivg0Gk6ex/1suOZGA58tMgt65C5BYU0nJ2QHzh/wAFIfjxEtrafC3SLgNM7R3uttG33VGGggPuTiQjttj9TXxDbW5bwjcBR80s6Af99oKztd16/wDE2t3urardyX2p30z3FxczHLSOxyzH8TXT6XCqeHbUPwN6Oc/9dAa9WEeSNjtox3R1fhPwve+Kdc0zQdKj828u5FgiB6Lxyzf7KqCx9lNfo74J8JWXgXwrpug6euLWyiEYYjBkbq7n3ZiWPuTXyz+wlpK69q3izxS0Ya2tRFpllIV6scvM34jycex96+wHYRqzMcKoyTX5LxVj5VsV9Vj8MPxbX6bfeepSs1zI8j+N7HU9H1OND81hCLmP/rpERKPzKgVF8dpri/8AgbKiqXkmtckj/d61Z1BhqT3BmXcs5bep7g9R+taF7EdQ/Z8heX55DoyksfXyhk/nX03A9X3a1F9Gn990/wAkefmUeWUJH5GTfJIy+hxVOeTrVq++W4mHo5/nWdO9fdWPJkewfsuXFsvjy8W7AaFrQ5DDI+8K9f8Ai5Z2MOimGziSC3dgqKi4GCCeB+NeDfs9c+MLo5x/o+3P1YV7n8X5Fhs7a1B3GPYf0IrTEyawU15P9TgqvU+d76xTTbO/s4BlUa3Qep5BJ/WtLxxHJdeGZ4oI2lfK4VBk9a4n4mapM+s/ZcBUjAdWXgnI71ykWq3cP+rupk/3XIr5+lhZ1Ywrc2u/5f5CtezZ9ORsI724BOFKI5z6/MP5KKRtUsl4a7gH1lX/ABrD+x2+7PkR59dgzU1e1yn1XtH2NM6xadpS49Y0Zh+YFVl1e3W8mZRMUZFxiFhlgWz1HpiqtFPlF7SRf/tpO1tOf++f/iqzNenGrWIiS1mEquHRmKYz0P8AF6E1JRRyolybVmLpep3dvZpFPbh3TgN5nUds8Va/tif/AJ9o/wDv8f8A4mqlIzBFLMcKBkmnyoOaSVrn6Jfsk+LPFPh34NaVFd6fYX1pMZJrPdfyJIkRckBh5JHXOMH7u2vZ/wDhZus/9ACx/wDBo/8A8j1598O9GPh3wD4b0tl2PZ6bb27L33LEoOffINbd7IsNnO7naqxsxPoAK/Bq/E+P9tP2cly3dtOlzuWDpSV5bnW+HfismreILLSbu0traa8LpA1re/aPnVGchgUTHyo3Iz0rvq+RtN1T+w9a0jUTnba39vI7L1WPzVEh/wC+C/4Zr6ls/E2nXuAtwInP8Mvyn/Cvu8lx9THYdyrP3k7dux5uLw6ozShsalFCsGAIOR6iivojhCiiigDB8LeG4dFk1O7NrHFqF/dzSzTDlnTzXMQz6BSDt6AsxxknO9RRQBznxF+IGjfC3wXqvijXrj7PpmnxGR8YLyN0WNB3ZmIUD1Ir8cPjV8YNb+OHj+/8Ua2+1pT5drZqxMdpbgnZEv0yST3Yse9e+f8ABQj49SePPiF/wgulXBOgeG5SLnYfluL7GHJ9owSg9GMntXyRXo0afKuZ7s2hHqKYmCrJj5SSufcY/wAa6nxAvk+DEj6ZWEH/AL6Un+tZd1aGPw7ZSgcvO36g/wDxIre8U2stxpENrbp5k0k0cUaD+JicAfniui/VnUlaMvQ+9P2MvCv/AAjHwB0ORk2XGqSTajL7732ofxjSOvUPHXiK38M+HZLm4J/fzQ2Uar1LzSLEuPoXyfYGrfhTQYvCvhfR9Fg5g02zhs0IGPljQIP5V4b+114wGi3nwt0ZX2NqHie2uZOesULqrD6bpkP4V+B2eZY+T/nbfy1f5Hpfwqa8jrKk1PXE0v4G32/GzfeWy5PCgTyIB+AAqOvFvjT8bNG8M+E/FXgq4ONU8wT2sRyNwkRXJH/A9/519jwXUUcdOD6x/Jr/ADMMyjenF+Z8A6g2Lqcf7bfzrLmbrWhqCyec7MjKXYtg/WsuYN6H8q/UHufPSO3+DfiNPD/iG8kkKqrW+d7diGUivVfFviT+2pFIYuNoyW9QT/jXz7ommm8kfGoQ2TEbdsmQW9q9aVn+zRb/AL+wbsHvivEzLESjFUovR7nnVtzzf4i6He3GqNfKsYtQiruZwOR9a4Ldya9x1rT49V0+a2kQOGHAJxz2Oa87/wCFa3m4lru3T2GTU4PGQjT5ajtYIyVtT2aiiivcPpwooooAKKKKACtXwno//CQ+KtF0rbuF/fQWhHtJIqflzWVXpX7N+k/2x8bfCsLLmOOd7lj6eXE7qf8AvpVH41w46t9XwlWt/LFv7kVFc0kj9DqyfFk3k+G9R7F4WiX6v8o/Uitaue8fSeX4YmPczW6j8Zk/pX8yU9ZxXme6ec61HJNo1/HCN0z28ioPVipx+tepWevahPZwXDaO1xHPGskbWFykg2kZGfM8v17A15zXT/Bnxxp/i7wjFa20m3UNFP8AZl9bOfnjlizHux/dbYSD9R1BA/SuGpaVYej/ADOHHL4WdZbeNH084MGq2MneNbSSUfnEGU/nWvbfGCK1wLq+hh9tRia2Y/TeFqCivt1Kx5Ljfc27f42eHmwJtQsQf+md7Gf0JFa9v8UPDt0oKX8ePUOp/kTXGnng8iuR8T+MvBvhuZ49Xu7BbpeWt1i8+cZGcmNAzAe+K0jKUnZK5m4RWrPXb74ueDdLjL3/AIk06wQdWup1jA/E14H8fP2+PBHgfw7e2fgnU4fFXiiaNo7eSzBeztmIwJXk+6+OoVM5IwdoOa+LfjH8P9R+JXxg8R+INNnh07RryWL7P5y/NsWGNP8AVgccqeCQa8y8aeEU8JXVpDFfrqCTQ7/NRAo3BipAGTxx6+tevDCtJSmYRlCUuVMwLq6mvbma4uJXnuJnaSSWRss7E5LE9ySc1FRVnTYPtOoW8XUM4B+mea6jrXY6++0/Oi2sIHzRvD/6EAf0Jr0H4T+HU8UfFjwXYyYMa6tDdMG6MIcykH6+Xj8a5G6jM1tKi/eZCB9cV33wCulX4veD7gcBrxQP+Boy/wDs1efjpOOEquO/LL8md/Ktj9D6+Af24vGnmfHjQrRJP3Wg2lu7DP3ZXkMrH/vjyvyr7+r8mv2gPEn/AAmXxn8aalu8yKXUZYI3/vRxHykI9iiLX5hwnh1Wxkpy2jF/jp+VwxcuWCR+hVeG/Fr9mi7+NXjq8vdPKo8On2yytuw2S8wHb0UflXr/AIW1L+2PDOkX+d32qzhnz67kDf1qj4h+KX/Co9VsdUe1a5tL6N7SbYcHcCHj/Ieb+Zrn4fnGjmUI1XZO6f3f5o1zBc2Gcl0sz5yh/Yd8S+FN12beDUtnIV3yw+g6VxniDwfc6Ef9O0k2oJIDSQ4Bx6cV92+F/wBpDwl4qiVZLtbGduPKuPl/Wr/i3wn4b+JOm+VMsN5H1Uo3f6iv1ytgKeKXPSqa+t0fFSjz63PzbubKDn9xH/3wKpTegGK+utY/Y/t7hppINTaAscpGqZUD0615r4m/ZT8TaarvZzQ3qjooyrGvCqZbio/Zv6GDhI+fbwyCNvKCs/YMcCuG1zwvqWsXn2jzIYMjDIsr4NfSzfsz+MXsWnaCFHHSEv8AMa5XxR8EPFfhnS3v7yyBgT73ltuI98Cqp0MVh/fUH9xUVKOtjEkmSJSXYKKpSasM/JHkepNZ0cclxIUiXe/ck4A+prVs9OW3GXbzZPXGAPoK+pPpruWwyPUJZOluWHtn/CrsbMygsuw+mc06igtJ9wooooKCve/2L9L+2fFi7u2XKWelyup9HaSNR/46XrwSvqr9hnS/3vjDUWGeLW3jPp/rWf8A9k/KvmOJavscprvukvvaRtRV6iPq6uV+Ikm3TtPTtJeAEeuI5GH6gflXVVxvxFk3tpEHTEslx/3yhTH/AJF/Sv5/o/Gj2jlq+a9R8Y6z8I/jHruo6I6CcXDNJBNnyblJVWUo4HOMv1HIIz7H6Ur5s/aC0/7J4+W4UYS6so5CfVwzof8Ax1Ur9C4VqKOOdOW0otfk/wDMzxUeaGpsf8PGdU0+Z7fUPh7A1xGdriPV2j5+hhbj8aZP/wAFJLxlPk/D6CM+smsF/wBBAK8C8VeGI9et/Mj2x3sY+R+zD+63t/L868vmhkt5XilRo5EO1kbqDX65HC0JfZ/M+cqRnTe+h9Wat/wUT8bXCMum+HNCsiejTiacj8nUfpWL4o+Iert8MH8VNLH/AG1qDi4kk8sbRJLLuchendsDtxXzXXvNnot14z+A9jaaeolu8AxoWChikxBGTwOAa6qdGFO/IrHBVd7XPINa8aa74i3DUdVubmNusW/bGf8AgC4X9K2tQBt/D3hm2PVbF5fwe4mI/StnRfgDr99NEt9Nb6esjBVjUmeZmPZUXhifQHNZ/jRUtfEE+nRRzQxaWq6cqXK7JQYRsbcOx3huPft0qpbGlOzkuXoYVbHhWLzNYRv7is36Y/rWPXQeDF/0+dvSLH6j/CsT0IfEjsK6L4PXX2H4neEwTjy9atI/+AtMgH4YbH4VztOsNS/sDXNO1bO1bWeOVz6bHDK34Efr7Vy4iHtKM4d01+B3PTU/S7xl4gXwp4Q1zW3xs02xnvDu6YjjZ/6V+OzyPK7PIxeRjlmbqSepr9Ov2wPEg8O/s+eJmR8S3yxWMfP3vMkUOP8Av3v/ACr8w6+L4Oo8uHq1u7S+5f8ABOXGS95I/Qj4A6r/AGx8G/Ck+d3l2Ytf+/TGL/2So/jxor6x4BdoU8ye0uoZkT1Jbyj+khP4Vx37Hes/b/hfdWLN8+n6hJGF9EdVcH8WZ/yNew+KtLfXPDOq6fGcS3NrJFG3Ta5UhT9QcH8K+NxKWDzSd9oz/C9/yPT5fb4bl7o+ZvDfwb8VeKrQXVlY7Yc43Sttr1P9n/QNe8K+MLuw1SG6hZV43ufKx7e9eQ6X8dPFthDAsGpOkSAERlQOPQ16V8OfiRffEDxUbjVNQazEQULb24JL+p6V+wYSOFVWPs2+bztqfBxtfQ+rZF3LWbdQ5zXODx7cRyi2t9GvrlFwBMUwD78mukime6tVkkjMTMMlG6ivpUr7G5jXUYXNeeeO/Gnh/wAPwvBq15BAWX/Vykc/hXpd6vWvGPjB8H7P4kIhlmNvNH910UZ/E0SU1FuCuwd7HxxDAlvGI412qP8AOakoorzT3wooooGFFFFABX2t+xTpn2T4X6ndsPnu9VkYN/sLFEoH5hvzr4pr9Av2W9N/s34G+HFIw832idj67p5CP/Hdo/CvguNKvJlsYfzSX5NnVhleoerV5L8VvEH2H4meCtK3fLfWGpMV/wBpGtSp/LfXrVfLnx9177F+1J8M7YthFsZgy/8AXbzYx/48i/lX5LldD6xXlHtGb+6LPRqS5Un5r8z0ivDv2nrdLe38N6i42p58tkX/ANp1DqD/AN+m/Ovca8r/AGmtH/tb4RanIq7pbKWG6QfRwjH/AL5dq9nJa3sMxoz87ffp+ptX/hysfOrHapPX6VpeDB4WsvFtpqXiXw9b+IdMYeVcwuWDhCfvpgjLL6HgjI4yCOW8N6t/aFr5chzPFwf9odjWm37klx9z+If1r94aurHju1SOux9/+D/g98Lf7Ps9V0Hwf4dmtriNZoLxbCORmUjIIZlLCp9W+B/hfWtYn1CeG5TzyGkt4JzFESABxtwV4A+6RXiv7GfxetNF8RJ4F8QFW0fVpf8AiXTs2DbXTH7mf7sh4x/fxx87Gvt9/AdsZQVuZVj7qQCfz/8ArV4841aUtJHnzjGL5ZI8o+H3w30zSdS1SLRNGigmjlVftBG6TyzGh5kYliu4NxnqDXwh+278L7r4b/HC9uHjVbPXoV1OFo+V3n5JVz671LH2kFfq/peiWej7zbRbXkCh5DyzAZxk+2T+Zr5n/wCCh3wqPjn4Kr4jtIfM1PwtMbv5RljavhZx9BiOQn0iNa0G4zvJ7mfNrZbH5bq2WYdxXR+Cz/plwP8Apn/Wua6XH+8v8j/9et7wjMI9W2n/AJaIy/1/pXrHRT+JHa02RFkRkcBlYYKnoRTqKk9A958dHWP2ivgH4U0LSLu3Gq6TKWv0uXK+a8CGOPLAH5nSTfyMZPbFfI/ivwTr3ge++ya7pVxpsxOFMy/JJj+44yrf8BJr6a/Zt14af4uvtLcgJqNuGQn/AJ6REkAfVWc/8AFfQ+q6RY67Yy2WpWcF/ZyjDwXMYkRvqCMV+c1M0qZBi54VQTpN8y6PXXfy2+QPCxrx5r2Z8rfsU675PiDxLozNn7TaxXaL6eW5VsfXzV/KvrSvLfD/AOz5oXgvx/Z+J/DdxPpQQSJcac2ZYZUdSMKSdyHdhupHygACvUq+WznFUMbi3iKG0kr36Pb9Dsw0JU6fJLofEfj7Sv8AhH/HOvadt2LDeSFF/uxsd8Y/74Za9B/Z98R6Fo/jC2jvLf8AfSDAupXwFb0xVD9pzSf7M+IUF8q4j1CzRyfWRCUb/wAd8v8AOvO/CdqdY8QWNmJngMsgUSRjJX3r9JyjEOVOjVirtpffs/xPicTT9liJR8z9IodQtJI1aN4yCMjBFNmmVh8pBFeSeEvhWNHiikuNcv7s4Bw8xA/KvQoJobWFYUk3YGBlsmv0mMZNaqxJJeN1rnNSfarHrWvdXGc1g6hJnNWoDPzy1DWrHSVzd3UUBxuCs3zEZxkDqau157rGl2lpLcvbTteTmRGkmmPmsqSAo/zAcDDL+Va914iuFhm8meMyLLtjJO8mE5zLgINwAP3hhTtPHIr549hVNXzHTi4ja4aAODMqByncKSQD+YP5VJXL2d1JFqc1zDdR6lEVt7eSbAywLsAQV+Xguc8dK6iguMuYKKKKCwr9LPhHpv8AZPws8IWhGGi0m1D/AO95Slj+JJr81FhkuSIYv9bJ8i/U8Cv1Ss7WOxtYbeIbYoUWNB6ADAr8t46qWhh6fdyf3W/zO7CrVslr4X/ao1z7N+1j4Tn3YSwi06N/ZftLu36SV90V+bf7Ymqsn7RfiCRDl7JbQLj1FvG/82r5rhKj7fHTj/cl+Nl+peMly00/M+yaxfGui/8ACSeD9c0oLua8spoF/wB5kIB/MitiKRZo0kQ7kYBlPqDTq8GEnTkpLdHrNcysz829L1BrC6iuEzgdV9VPUV6JDMs8SSIdyMMg+1cn8QtF/wCEd8d+INNC7Ut76ZYx/wBM95Kf+OlaueD9Q8yF7Rz80fzJ9O4/P+df0ZTqKtTjUjs0n9583TfLJwZuwyS2t0oj8xU++kseR5TAjuOnJGD68elfqj+zZ8WP+FwfCvTdWuJFfWLX/QdSUYH+kIBl8dt6lXx2347V+ZfhDVrXQ/E2m3t/F5+mpKEvYcZMls4KToPcxs4B7Eg9q+r/AIHabq/7Of7Rl/4De7jn0PxLb+bpl5cAmO62BngbcpAVtvmxtgctt4IK1lWXMvMzxCvofa9Y3jNbaTwjrUd5FHPayWU0ckMwykishBUjuDnGPeqU3i660aQJrWltaxk7VurZ/NgYnoM4BXsPmAyTgZrP13UB4svLPTbQn7M0qNNuBG9QwLr/AN8hh9TXnc1jiUWz8ffjp8Lbz4M/FDWvCl35jpYXX+izyDme3fmKT0yVYZx0YMO1cnptx9l1C3lzgK4z9M8/pX6W/wDBQj9nuT4l+AU8Z6Jbeb4g8PQsLiONcvcWXLMB6mMkuB6GTqSK/MeOTzI0cDG4A169OfPG5tCR6lRVfT5/tVjby92QE/XHNWKs9UueE/Fa+FPEVprThzHpl0JJvLGWMWP3gUepjZhj3r6v8I/GLwb44MaaTr9pLcyfdtZm8mYn0CPhj+ANfGFntm1DVrduULISP95AD/KvN9hVdj8svB+or57NMko5o1OUnGSVr/5r/gmX1iVG1ldM/Umivz28F/Hbxt4F2JYa3NcWif8ALnf/AL+HHoA3Kj/dK1754J/bL0fUPLg8UaXNpMvQ3dnmaH6lfvr9Bvr4HGcNY7DXlTXOvLf7v8rnXTxlKej0Nv8Aaw0X7R4T0jVkXL2V2YWOOkcq8n/vqOMfjXzVo2pXVjqVvNZy+Vcq3yPnGDX1/wCPtQ0b4qfCHxH/AGHqNtq0YtTOn2aQMRJHiVVYdVJKAYIB5r4x02zm1a+htbfBllbauTgV9Bw7Kbo+xaalGW3XXX87ngZpBKsprqj6MsdT+KutafCttLDHDtGHVgSR65rtvBWh+K9NuludUuZbqXuHm+X8gK87+Gln4w8G3EUct9bTaeTzE8udo9q91XxRY+Spe7iDY5+YV+xYei2lOXNfs2eWkbS3kjxAyYDd6oXc2c81nS+KdOH/AC+Q/wDfQrPuPFWmY/4/Yf8AvoV38pR//9k=';

const urlAPI = 'http://127.0.0.1:3000';

export class User {
    constructor(id, username, email, password, profilePicture) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.profilePicture = profilePicture;
    }
}

export const defaultUser = new User(0, 'username', 'username@email.com', 'password', defaultImage);

const getUsers = async () => {
    try {
        const response = await axios.get(urlAPI + '/usuarios/');
        return response.data.map(({id_usuario, nome, email, senha, foto_perfil}) => {
            return new User(id_usuario, nome, email, senha, foto_perfil);
        });
    }
    catch (err) {
        console.error("Erro ao buscar usuários");
        return [];
    }
}
export const getUser = async (id) => {
    try {
        console.log(`tentando achar o usuário ${id}`);

        const response = await axios.get(urlAPI + `/usuarios/id/${id}`);
        const { id_usuario, nome, email, senha, foto_perfil } = response.data.user;
        return new User(id_usuario, nome, email, senha, foto_perfil);
    } 
    catch (err) {
        console.error(`Erro ao buscar usuário! ${err}`);
        return null;
    }
};

export const createUser = async (username, email, password) => {
    try {
        await axios.put(urlAPI + '/usuarios/', {
            nome: username,
            email: email,
            senha: password,
            foto_perfil: defaultImage,
        });
    }
    catch (err) {
        console.error(`Erro ao criar usuários! ( ${err} )`);
    }
};



const onUserLogout = new Event('user-logout');
const onUserLogin = new Event('user-login');

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${urlAPI}/usuarios/login/`, {
            email: email,
            senha: password
        });
        console.log(`tentando logar como ${email} ${password}`);
        console.log(`login response: ${JSON.stringify(response.data)}`);

        const userID = response.data.userID;
        const currentUser = await getUser(userID);

        localStorage.setItem('currentUserID', userID);
        window.dispatchEvent(onUserLogin);

        return currentUser;
    } catch (err) {
        console.log(`Erro ao fazer login! ( ${err} )`);
        return null;
    }
}

export const logout = async () => {
    try {
        localStorage.removeItem('currentUserID');
        window.dispatchEvent(onUserLogout);
    } catch (error) {
        console.log('Erro ao deslogar');        
    }
}

export const isLoggedIn = () => {
    const userID = localStorage.getItem('currentUserID');
    return userID !== null;
}

export const getLoggedUser = async () => {
    const userID = localStorage.getItem('currentUserID');
    
    if (userID === null) {
        return null;
    }

    return await getUser(userID);
}

export const debugGetRandomUser = async () => {
    const users = await getUsers();
    return users[Math.floor(Math.random() * users.length)];
};