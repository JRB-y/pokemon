<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pokemon extends Model
{
    protected $table = "pokedex";
    protected $primaryKey = 'id_pok';
    protected $with = ['type', 'stats', 'evolution', 'weakness', 'description'];

    //relations
    public function type()
    {
        return $this->hasOne(Type::class, 'id_pok');
    }

    public function stats()
    {
        return $this->hasOne(Stat::class, 'pokemon_id');
    }

    public function evolution()
    {
        return $this->hasOne(Evolution::class, 'id_pok_base');
    }

    public function weakness()
    {
        return $this->hasOne(Weakness::class, 'pokedex_id');
    }

    public function description()
    {
        return $this->hasOne(Description::class, 'pokemon_id');
    }
}
